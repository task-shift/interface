import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import PropTypes from 'prop-types';

const STATUS_COLORS = {
  'Pending': '#ffc107', // warning
  'Ongoing': '#0dcaf0', // info
  'Finished': '#198754', // success
  'Blocked': '#dc3545'  // danger
};

const defaultTasks = [
  { id: 'task-1', title: 'Create project', status: 'Finished', description: 'Initial project setup and configuration', dueDate: '2/10/2025', color: '#FF5733', assignee: 'profile.jpeg' },
  { id: 'task-2', title: 'Design UI', status: 'Ongoing', description: 'Create wireframes and mockups', dueDate: '3/15/2025', color: '#33FF57', assignee: 'profile.jpeg' },
  { id: 'task-3', title: 'Develop backend', status: 'Pending', description: 'Implement API endpoints', dueDate: '4/20/2025', color: '#3357FF', assignee: 'profile.jpeg' },
  { id: 'task-4', title: 'Test application', status: 'Pending', description: 'Run unit and integration tests', dueDate: '5/1/2025', color: '#F033FF', assignee: 'profile.jpeg' },
  { id: 'task-5', title: 'Deploy to production', status: 'Blocked', description: 'Set up CI/CD pipeline', dueDate: '5/15/2025', color: '#FF33A8', assignee: 'profile.jpeg' },
  { id: 'task-6', title: 'User feedback', status: 'Pending', description: 'Collect initial user feedback', dueDate: '6/1/2025', color: '#33FFF5', assignee: 'profile.jpeg' },
  { id: 'task-7', title: 'Implement features', status: 'Ongoing', description: 'Add new requested features', dueDate: '6/15/2025', color: '#FFD133', assignee: 'profile.jpeg' },
  { id: 'task-8', title: 'Code review', status: 'Finished', description: 'Review pull requests', dueDate: '6/20/2025', color: '#FF5733', assignee: 'profile.jpeg' },
  { id: 'task-9', title: 'Documentation', status: 'Ongoing', description: 'Update project documentation', dueDate: '7/1/2025', color: '#33FF57', assignee: 'profile.jpeg' },
  { id: 'task-10', title: 'Team meeting', status: 'Finished', description: 'Weekly sync with team', dueDate: '7/5/2025', color: '#3357FF', assignee: 'profile.jpeg' },
  { id: 'task-11', title: 'Bug fixes', status: 'Pending', description: 'Fix reported issues', dueDate: '7/10/2025', color: '#F033FF', assignee: 'profile.jpeg' },
  { id: 'task-12', title: 'Performance optimization', status: 'Ongoing', description: 'Improve load times', dueDate: '7/15/2025', color: '#FF33A8', assignee: 'profile.jpeg' },
];

// Helper function to create rounded rectangle paths
const roundRect = (ctx, x, y, width, height, radius) => {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
};

// Create a simple trash icon
// const drawTrashIcon = (ctx, x, y) => {
//   // Trash can body
//   ctx.beginPath();
//   ctx.moveTo(x - 12, y - 6);
//   ctx.lineTo(x + 12, y - 6);
//   ctx.lineTo(x + 10, y + 14);
//   ctx.lineTo(x - 10, y + 14);
//   ctx.closePath();
//   ctx.fillStyle = '#dc3545'; // danger color
//   ctx.fill();
  
//   // Trash can lid
//   ctx.beginPath();
//   ctx.moveTo(x - 14, y - 6);
//   ctx.lineTo(x + 14, y - 6);
//   ctx.lineTo(x + 14, y - 10);
//   ctx.lineTo(x - 14, y - 10);
//   ctx.closePath();
//   ctx.fill();
  
//   // Handle
//   ctx.beginPath();
//   ctx.moveTo(x, y - 10);
//   ctx.lineTo(x, y - 14);
//   ctx.strokeStyle = '#dc3545';
//   ctx.lineWidth = 2;
//   ctx.stroke();
// };

// // Create down caret icon
// const drawCaretDownIcon = (ctx, x, y) => {
//   ctx.beginPath();
//   ctx.moveTo(x - 8, y - 4);
//   ctx.lineTo(x, y + 4);
//   ctx.lineTo(x + 8, y - 4);
//   ctx.closePath();
//   ctx.fillStyle = '#ffffff';
//   ctx.fill();
// };

// Create texture for cards that match the TaskCard component style
const createTaskCardTexture = (task) => {
  // Create an in-memory canvas to draw the card
  const canvas = document.createElement('canvas');
  canvas.width = 1024; // Increase canvas resolution
  canvas.height = 600;
  const ctx = canvas.getContext('2d');
  
  // For debugging - log the task object to verify description exists
  console.log('Creating card for task:', task);
  console.log('Description:', task.description);
  
  // Card background - white with rounded corners
  ctx.fillStyle = '#ffffff';
  roundRect(ctx, 0, 0, canvas.width, canvas.height, 30);
  ctx.fill();
  
  // Add a subtle shadow
  ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 3;
  ctx.fill();
  ctx.shadowColor = 'transparent';
  
  // Status badge (without background section behind it)
  const statusColor = STATUS_COLORS[task.status] || '#6c757d';
  ctx.fillStyle = statusColor;
  roundRect(ctx, 40, 40, 170, 50, 25); // Rounded corners like in the image
  ctx.fill();
  
  // Status text (without caret down)
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(task.status, 125, 75); // Center text in badge
  ctx.textAlign = 'left'; // Reset text alignment
  
  // Due date text - simple, without button background
  ctx.fillStyle = '#6c757d'; // muted text
  ctx.font = '24px Arial';
  ctx.textAlign = 'right';
  ctx.fillText('Due on ' + task.dueDate, canvas.width - 60, 75);
  ctx.textAlign = 'left'; // Reset text alignment
  
  // Task title - with ellipsis if too long
  ctx.fillStyle = '#212529'; // dark text
  ctx.font = 'bold 42px Arial'; // Larger than before
  const title = task.title;
  const maxTitleWidth = canvas.width - 100;
  if (ctx.measureText(title).width > maxTitleWidth) {
    let truncatedTitle = title;
    while (ctx.measureText(truncatedTitle + '...').width > maxTitleWidth && truncatedTitle.length > 0) {
      truncatedTitle = truncatedTitle.substring(0, truncatedTitle.length - 1);
    }
    ctx.fillText(truncatedTitle + '...', 40, 150, maxTitleWidth);
  } else {
    ctx.fillText(title, 40, 150, maxTitleWidth);
  }
  
  // Task description - simple text without background or header
  const descriptionText = task.description ? task.description : 'No description available';
  
  // Log the actual text we're going to display
  console.log('Drawing description text:', descriptionText);
  
  // Description with medium gray color like in the image
  ctx.fillStyle = '#6c757d'; 
  ctx.font = '26px Arial';
  
  // Position below title
  const maxDescWidth = canvas.width - 80;
  
  // Simple single line with ellipsis
  if (ctx.measureText(descriptionText).width > maxDescWidth) {
    let truncatedDesc = descriptionText;
    while (ctx.measureText(truncatedDesc + '...').width > maxDescWidth && truncatedDesc.length > 0) {
      truncatedDesc = truncatedDesc.substring(0, truncatedDesc.length - 1);
    }
    ctx.fillText(truncatedDesc + '...', 40, 210);
  } else {
    ctx.fillText(descriptionText, 40, 210);
  }
  
  // Horizontal divider - simple line
  ctx.strokeStyle = '#dee2e6';
  ctx.beginPath();
  ctx.moveTo(40, canvas.height - 100);
  ctx.lineTo(canvas.width - 40, canvas.height - 100);
  ctx.lineWidth = 1;
  ctx.stroke();
  
  // Profile circle
  ctx.fillStyle = '#e9ecef';
  ctx.beginPath();
  ctx.arc(70, canvas.height - 50, 30, 0, Math.PI * 2);
  ctx.fill();
  
  // Profile icon (simple user silhouette)
  ctx.fillStyle = '#6c757d';
  ctx.beginPath();
  ctx.arc(70, canvas.height - 60, 14, 0, Math.PI * 2); // Head
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(70, canvas.height - 35, 20, 10, 0, 0, Math.PI * 2); // Body
  ctx.fill();
  
  // Trash button - outline only as in the image
  ctx.fillStyle = 'transparent';
  ctx.strokeStyle = '#dc3545'; // danger color
  roundRect(ctx, canvas.width - 180, canvas.height - 70, 140, 40, 20);
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Trash text and icon
  ctx.fillStyle = '#dc3545';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  // Just text in the center without icon
  ctx.fillText('Trash', canvas.width - 110, canvas.height - 43);
  ctx.textAlign = 'left';
  
  // Create a texture from the canvas
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

// Create an expanding hexagonal grid of cubes
const createHexagonalStructure = (scene) => {
  const group = new THREE.Group();
  const cubeSize = 1.5;
  const initHexRadius = 20; // Initial radius
  const layers = 5;
  const cubesPerLayer = 15;
  const structureColor = 0x2466FF; // Brand color
  
  // Create materials with different opacities
  const materials = [
    new THREE.MeshPhongMaterial({
      color: structureColor,
      transparent: true,
      opacity: 0.3,
      wireframe: false,
      side: THREE.DoubleSide,
      specular: 0x333333,
      shininess: 15
    }),
    new THREE.MeshPhongMaterial({
      color: structureColor,
      transparent: true,
      opacity: 0.15,
      wireframe: true,
      side: THREE.DoubleSide
    })
  ];
  
  // Create cube geometry that we'll reuse
  const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
  
  // Keep track of cubes and their initial positions for animation
  const cubes = [];
  const initialPositions = [];
  
  // Helper function to get hexagonal coordinates
  const getHexPosition = (i, layer, totalInLayer, radius) => {
    const angleStep = (Math.PI * 2) / totalInLayer;
    const angle = i * angleStep;
    const layerRadius = radius - layer * 2; // Each layer is smaller
    
    return {
      x: layerRadius * Math.cos(angle),
      z: layerRadius * Math.sin(angle),
      y: layer * 3 - (layers * 1.5) + (Math.random() - 0.5) * 2 // Randomize height slightly
    };
  };
  
  // Create cubes arranged in hexagonal layers
  for (let layer = 0; layer < layers; layer++) {
    const actualCubesInLayer = cubesPerLayer - layer * 2; // Fewer cubes in inner layers
    
    for (let i = 0; i < actualCubesInLayer; i++) {
      const { x, y, z } = getHexPosition(i, layer, actualCubesInLayer, initHexRadius);
      
      // Alternate between solid and wireframe for visual interest
      const material = materials[Math.random() > 0.5 ? 0 : 1];
      
      const cube = new THREE.Mesh(cubeGeometry, material);
      cube.position.set(x, y, z);
      
      // Random rotation for more organic look
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;
      cube.rotation.z = Math.random() * Math.PI;
      
      // Random scale variation
      const scale = 0.8 + Math.random() * 0.4;
      cube.scale.set(scale, scale, scale);
      
      group.add(cube);
      
      // Store the cube and its initial position for animation
      cubes.push(cube);
      initialPositions.push({ x, y, z, scale, layer, index: i, totalInLayer: actualCubesInLayer });
    }
  }
  
  // Add connecting lines between cubes for network effect
  const lineMaterial = new THREE.LineBasicMaterial({
    color: structureColor,
    transparent: true,
    opacity: 0.2,
    linewidth: 1
  });
  
  const lineConnections = [];
  const connections = 40; // Number of connections
  
  for (let i = 0; i < connections; i++) {
    const fromIdx = Math.floor(Math.random() * cubes.length);
    const toIdx = Math.floor(Math.random() * cubes.length);
    
    if (fromIdx !== toIdx) {
      const from = cubes[fromIdx];
      const to = cubes[toIdx];
      
      const points = [
        from.position.clone(),
        to.position.clone()
      ];
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, lineMaterial);
      group.add(line);
      
      lineConnections.push({ line, fromIdx, toIdx });
    }
  }
  
  scene.add(group);
  
  // Animation variables for expansion
  const expansionData = {
    cubes,
    initialPositions,
    lineConnections,
    expansionFactor: 1, // Will increase over time
    rotationSpeed: { x: 0.0003, y: 0.0005 }, // Will change over time
    currentHexRadius: initHexRadius,
    targetHexRadius: initHexRadius * 1.5, // Target for expansion
    pulsePhase: 0,
    group
  };
  
  return expansionData;
};

const TorusBackground = ({ tasks = defaultTasks }) => {
  const mountRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const requestRef = useRef(null); // For animation frame
  const previousTimeRef = useRef(null); // For delta time calculation

  // Set dimensions on client side
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  useEffect(() => {
    if (!mountRef.current || dimensions.width === 0 || dimensions.height === 0) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup - moved further back for better perspective
    const camera = new THREE.PerspectiveCamera(60, dimensions.width / dimensions.height, 0.1, 1000);
    camera.position.z = 60;
    
    // Renderer setup with transparency
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance' 
    });
    renderer.setSize(dimensions.width, dimensions.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    
    // Completely disable pointer events on the canvas
    renderer.domElement.style.pointerEvents = 'none';
    
    // Clear any existing canvas
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    
    mountRef.current.appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Create hexagonal structure with expansion data
    const hexStructureData = createHexagonalStructure(scene);
    
    // Task cards and connections
    const cardGroup = new THREE.Group();
    const connectionsGroup = new THREE.Group();
    scene.add(cardGroup);
    scene.add(connectionsGroup);
    
    // Dynamic path parameters for continuous motion
    const pathParams = {
      minRadius: 20,
      maxRadius: 50, // Will expand over time
      minHeight: -15,
      maxHeight: 15,
      expansionRate: 0.0001, // How fast paths expand
      currentExpansion: 0 // Current expansion state (0-1)
    };
    
    // Create dynamic, expanding paths for cards
    const createCardPath = (index, count) => {
      const pathPoints = [];
      const segments = 120; // More segments for smoother paths
      
      // Each card has unique path parameters
      const baseRadius = pathParams.minRadius + (index / count) * (pathParams.maxRadius - pathParams.minRadius);
      const heightOffset = pathParams.minHeight + (index / count) * (pathParams.maxHeight - pathParams.minHeight);
      const tiltAngle = (index / count) * Math.PI * 0.4;
      const phase = index * (Math.PI * 2 / count);
      
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const angle = t * Math.PI * 2 + phase;
        
        // Create a complex path with multiple frequency components
        const radius = baseRadius * (1 + 0.2 * Math.sin(angle * 3 + phase));
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        const y = heightOffset + 5 * Math.sin(angle * 2 + phase) * Math.sin(tiltAngle);
        
        pathPoints.push(new THREE.Vector3(x, y, z));
      }
      
      return { 
        points: pathPoints,
        baseRadius,
        heightOffset,
        tiltAngle,
        phase,
        speed: 0.0005 + (Math.random() * 0.001) // Each card moves at a slightly different speed
      };
    };
    
    // Create connections that follow dynamic paths
    const createDynamicConnections = (cards) => {
      // Clear existing connections
      while(connectionsGroup.children.length > 0) {
        connectionsGroup.remove(connectionsGroup.children[0]);
      }
      
      // Create more interesting connection patterns
      const connectionPatterns = [
        // Chain pattern
        ...Array.from({ length: cards.length - 1 }, (_, i) => [i, i + 1]),
        
        // Star pattern from center
        ...Array.from({ length: cards.length - 1 }, (_, i) => [0, i + 1]),
        
        // Random additional connections
        ...Array.from({ length: 10 }, () => {
          const i = Math.floor(Math.random() * cards.length);
          let j;
          do {
            j = Math.floor(Math.random() * cards.length);
          } while (j === i);
          return [i, j];
        })
      ];
      
      // Create connections with dynamic properties
      connectionPatterns.forEach(([fromIdx, toIdx]) => {
        if (fromIdx < cards.length && toIdx < cards.length) {
          const from = cards[fromIdx];
          const to = cards[toIdx];
          
          const points = [
            from.position.clone(),
            to.position.clone()
          ];
          
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const lineMaterial = new THREE.LineBasicMaterial({ 
            color: 0x2466FF,
            transparent: true,
            opacity: 0.6,
            linewidth: 1
          });
          
          const line = new THREE.Line(geometry, lineMaterial);
          connectionsGroup.add(line);
        }
      });
    };
    
    // Create dynamic cards with unique paths
    const createDynamicCards = () => {
      // Map input tasks to ensure they have all required properties
      // This merges any passed tasks with defaultTasks to ensure descriptions exist
      const taskItems = tasks.length > 0 
        ? tasks.map(task => {
            // Find matching default task by ID or title for fallback description
            const defaultTask = defaultTasks.find(dt => 
              dt.id === task.id || dt.title === task.title
            );
            
            // If no description in the task, use the matching default task's description
            return {
              ...defaultTask, // Get all properties from default task as base
              ...task, // Override with passed task properties
              // Ensure description exists by falling back to default if needed
              description: task.description || (defaultTask ? defaultTask.description : 'No description available')
            };
          })
        : defaultTasks;
      
      console.log('Creating cards with task items:', taskItems);
      
      const cardPaths = [];
      const cards = [];
      const cardData = [];
      
      taskItems.forEach((task, i) => {
        // Check that each task has a description
        console.log(`Task ${i} (${task.title}): description = "${task.description}"`);
        
        // Create larger card geometry for better visibility
        const cardGeometry = new THREE.PlaneGeometry(8, 4.8); // Increased size by ~33%
        
        // Create texture for this task
        const texture = createTaskCardTexture(task);
        
        // Create material with texture
        const cardMaterial = new THREE.MeshStandardMaterial({
          map: texture,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 1.0,
          metalness: 0.2,
          roughness: 0.7,
        });
        
        const card = new THREE.Mesh(cardGeometry, cardMaterial);
        
        // Create dynamic path for this card
        const path = createCardPath(i, taskItems.length);
        cardPaths.push(path);
        
        // Start at random position on the path
        const progress = Math.random();
        const pointIndex = Math.floor(progress * (path.points.length - 1));
        card.position.copy(path.points[pointIndex]);
        
        // Orient card to face camera
        card.lookAt(camera.position);
        
        cards.push(card);
        cardData.push({ 
          path, 
          progress, 
          card,
          speedFactor: 0.8 + Math.random() * 0.4, // Each card has a slightly different speed factor
          pulsePhase: Math.random() * Math.PI * 2 // Each card pulses at a different phase
        });
        
        cardGroup.add(card);
      });
      
      // Create initial connections
      createDynamicConnections(cards);
      
      return { cards, cardData, cardPaths };
    };
    
    // Create dynamic cards with continuous motion
    const dynamicCardsData = createDynamicCards();
    
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.15; // Slower rotation for a more subtle effect
    
    // Completely disable user interaction with controls
    controls.enabled = false;
    controls.enableRotate = false;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.update();
    
    // Global animation counter and timing variables
    let animationCounter = 0;
    
    // Time-based animation for smooth consistent motion
    const animate = (timestamp) => {
      // Store animation frame request for cancellation on unmount
      requestRef.current = requestAnimationFrame(animate);
      
      // Calculate time delta for smooth animation
      if (previousTimeRef.current === null) {
        previousTimeRef.current = timestamp;
      }
      const deltaTime = Math.min((timestamp - previousTimeRef.current) / 1000, 0.1); // Cap delta time
      previousTimeRef.current = timestamp;
      
      // Increment counter based on time
      animationCounter += deltaTime * 0.05;
      
      // Expand the hexagonal structure over time
      const expansionFactor = 1 + 0.3 * Math.sin(animationCounter * 0.2); // Pulsing expansion
      hexStructureData.pulsePhase += deltaTime * 0.01;
      
      // Update each cube in the hexagonal structure
      hexStructureData.cubes.forEach((cube, i) => {
        const initialPos = hexStructureData.initialPositions[i];
        
        // Calculate new expanded position with pulsing effect
        const radius = hexStructureData.currentHexRadius * 
          (1 + 0.05 * Math.sin(animationCounter * 0.5 + initialPos.layer * 0.2));
        
        const layerRadius = radius - initialPos.layer * 2;
        const angle = (initialPos.index / initialPos.totalInLayer) * Math.PI * 2;
        
        // Apply expansion factor to position
        cube.position.x = layerRadius * Math.cos(angle) * expansionFactor;
        cube.position.z = layerRadius * Math.sin(angle) * expansionFactor;
        
        // Add subtle vertical motion
        cube.position.y = initialPos.y + Math.sin(animationCounter * 0.5 + i * 0.1) * 0.5;
        
        // Slowly rotate each cube
        cube.rotation.x += deltaTime * 0.05 * Math.sin(animationCounter + i * 0.1);
        cube.rotation.y += deltaTime * 0.05 * Math.cos(animationCounter + i * 0.1);
      });
      
      // Update line connections in the hexagonal structure
      hexStructureData.lineConnections.forEach(conn => {
        const fromCube = hexStructureData.cubes[conn.fromIdx];
        const toCube = hexStructureData.cubes[conn.toIdx];
        
        const positions = conn.line.geometry.attributes.position.array;
        
        positions[0] = fromCube.position.x;
        positions[1] = fromCube.position.y;
        positions[2] = fromCube.position.z;
        positions[3] = toCube.position.x;
        positions[4] = toCube.position.y;
        positions[5] = toCube.position.z;
        
        conn.line.geometry.attributes.position.needsUpdate = true;
      });
      
      // Slowly expand the maximum path radius
      pathParams.maxRadius = 50 + 30 * Math.sin(animationCounter * 0.1);
      pathParams.currentExpansion = Math.sin(animationCounter * 0.2) * 0.5 + 0.5; // 0-1 oscillation
      
      // Update cards along their paths with time-based animation
      dynamicCardsData.cardData.forEach((data) => {
        // Update progress based on deltaTime for smooth motion
        data.progress += data.path.speed * data.speedFactor * deltaTime * 20;
        if (data.progress > 1) data.progress -= 1; // Wrap around instead of resetting
        
        // Get interpolated position on path
        const pathPoints = data.path.points;
        const pointIndex = Math.floor(data.progress * (pathPoints.length - 1));
        const nextPointIndex = (pointIndex + 1) % pathPoints.length;
        
        const subProgress = data.progress * (pathPoints.length - 1) - pointIndex;
        const currentPoint = pathPoints[pointIndex];
        const nextPoint = pathPoints[nextPointIndex];
        
        // Apply expansion factor to card position
        const expansionMultiplier = 1 + 0.3 * pathParams.currentExpansion;
        const basePosition = new THREE.Vector3().lerpVectors(currentPoint, nextPoint, subProgress);
        
        // Expand outward from center
        data.card.position.copy(basePosition.multiplyScalar(expansionMultiplier));
        
        // Make cards always face the camera
        data.card.lookAt(camera.position);
        
        // Add subtle rotation variation
        data.card.rotation.z = Math.sin(animationCounter * 0.5 + data.pulsePhase) * 0.1;
        
        // Subtle size pulsing
        const scaleFactor = 1 + 0.05 * Math.sin(animationCounter * 0.3 + data.pulsePhase);
        data.card.scale.set(scaleFactor, scaleFactor, 1);
      });
      
      // Dynamically update connections between cards
      connectionsGroup.children.forEach((line, i) => {
        const positions = line.geometry.attributes.position.array;
        
        // Get source and target indices for this connection
        const connectionIndex = i % dynamicCardsData.cards.length;
        const targetIndex = (connectionIndex + 1 + Math.floor(animationCounter * 5) % (dynamicCardsData.cards.length - 1)) % dynamicCardsData.cards.length;
        
        if (connectionIndex !== targetIndex && connectionIndex < dynamicCardsData.cards.length && targetIndex < dynamicCardsData.cards.length) {
          const fromCard = dynamicCardsData.cards[connectionIndex];
          const toCard = dynamicCardsData.cards[targetIndex];
          
          positions[0] = fromCard.position.x;
          positions[1] = fromCard.position.y;
          positions[2] = fromCard.position.z;
          positions[3] = toCard.position.x;
          positions[4] = toCard.position.y;
          positions[5] = toCard.position.z;
          
          // Gradually fade connections in and out
          line.material.opacity = 0.2 + 0.4 * Math.sin(animationCounter * 0.2 + i * 0.1);
          
          line.geometry.attributes.position.needsUpdate = true;
        }
      });
      
      // Slowly rotate the entire hexagonal structure
      hexStructureData.group.rotation.x = Math.sin(animationCounter * 0.1) * 0.2;
      hexStructureData.group.rotation.y = Math.cos(animationCounter * 0.15) * 0.3;
      
      controls.update();
      renderer.render(scene, camera);
    };
    
    // Start animation with requestAnimationFrame
    requestRef.current = requestAnimationFrame(animate);
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = dimensions.width / dimensions.height;
      camera.updateProjectionMatrix();
      renderer.setSize(dimensions.width, dimensions.height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      // Cancel animation frame to prevent memory leaks
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      
      // Dispose of resources
      scene.traverse(object => {
        if (object.geometry) object.geometry.dispose();
        
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => {
              if (material.map) material.map.dispose();
              material.dispose();
            });
          } else {
            if (object.material.map) object.material.map.dispose();
            object.material.dispose();
          }
        }
      });
      
      renderer.dispose();
      previousTimeRef.current = null;
    };
  }, [dimensions.width, dimensions.height, tasks]);
  
  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        touchAction: 'none', // Prevent touch events
        userSelect: 'none'   // Prevent text selection
      }}
    />
  );
};

TorusBackground.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string,
    dueDate: PropTypes.string,
    color: PropTypes.string,
    assignee: PropTypes.string
  }))
};

export default TorusBackground; 