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
const drawTrashIcon = (ctx, x, y) => {
  // Trash can body
  ctx.beginPath();
  ctx.moveTo(x - 12, y - 6);
  ctx.lineTo(x + 12, y - 6);
  ctx.lineTo(x + 10, y + 14);
  ctx.lineTo(x - 10, y + 14);
  ctx.closePath();
  ctx.fillStyle = '#dc3545'; // danger color
  ctx.fill();
  
  // Trash can lid
  ctx.beginPath();
  ctx.moveTo(x - 14, y - 6);
  ctx.lineTo(x + 14, y - 6);
  ctx.lineTo(x + 14, y - 10);
  ctx.lineTo(x - 14, y - 10);
  ctx.closePath();
  ctx.fill();
  
  // Handle
  ctx.beginPath();
  ctx.moveTo(x, y - 10);
  ctx.lineTo(x, y - 14);
  ctx.strokeStyle = '#dc3545';
  ctx.lineWidth = 2;
  ctx.stroke();
};

// Create down caret icon
const drawCaretDownIcon = (ctx, x, y) => {
  ctx.beginPath();
  ctx.moveTo(x - 8, y - 4);
  ctx.lineTo(x, y + 4);
  ctx.lineTo(x + 8, y - 4);
  ctx.closePath();
  ctx.fillStyle = '#ffffff';
  ctx.fill();
};

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
  
  // Top section with status and due date
  ctx.fillStyle = '#ffffff';
  roundRect(ctx, 40, 40, canvas.width - 80, 60, 15);
  ctx.fill();
  
  // Status badge
  const statusColor = STATUS_COLORS[task.status] || '#6c757d';
  ctx.fillStyle = statusColor;
  roundRect(ctx, 40, 40, 200, 50, 15);
  ctx.fill();
  
  // Status text with caret down
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px Arial';
  ctx.fillText(task.status, 65, 75);
  drawCaretDownIcon(ctx, 180, 65);
  
  // Due date button 
  ctx.fillStyle = '#f8f9fa'; // light background
  roundRect(ctx, canvas.width - 280, 40, 240, 50, 15);
  ctx.fill();
  
  // Due date text
  ctx.fillStyle = '#6c757d'; // muted text
  ctx.font = '24px Arial';
  ctx.fillText('Due on ', canvas.width - 260, 75);
  ctx.font = 'bold 24px Arial';
  ctx.fillText(task.dueDate, canvas.width - 170, 75);
  
  // Task title - with ellipsis if too long
  ctx.fillStyle = '#212529'; // dark text
  ctx.font = 'bold 36px Arial';
  const title = task.title;
  const maxTitleWidth = canvas.width - 100;
  if (ctx.measureText(title).width > maxTitleWidth) {
    let truncatedTitle = title;
    while (ctx.measureText(truncatedTitle + '...').width > maxTitleWidth && truncatedTitle.length > 0) {
      truncatedTitle = truncatedTitle.substring(0, truncatedTitle.length - 1);
    }
    ctx.fillText(truncatedTitle + '...', 40, 140, maxTitleWidth);
  } else {
    ctx.fillText(title, 40, 140, maxTitleWidth);
  }
  
  // Task description section
  const descriptionHeight = 180; // Increased height
  
  // Create a highly visible background for description without borders
  ctx.fillStyle = '#f0f5ff'; // Light blue background
  roundRect(ctx, 40, 160, canvas.width - 80, descriptionHeight, 15);
  ctx.fill();
  
  // Description header
  ctx.fillStyle = '#2466FF'; // Brand blue
  ctx.font = 'bold 28px Arial';
  ctx.fillText('Description:', 60, 195);
  
  // Task description - ensure we're getting it from the task object
  const descriptionText = task.description ? task.description : 'No description available';
  
  // Log the actual text we're going to display
  console.log('Drawing description text:', descriptionText);
  
  // Make description text extremely visible
  ctx.fillStyle = '#000000'; // Black text for maximum contrast
  ctx.font = 'bold 32px Arial'; // Even larger, bolder font
  
  // Position the description with more vertical space
  const maxDescWidth = canvas.width - 140;
  const lineHeight = 38;
  const startY = 240;
  
  // Force description text to be displayed even if it doesn't exist
  ctx.fillText(descriptionText, 60, startY);
  
  // Handle multiline description if needed - display up to 3 lines
  if (ctx.measureText(descriptionText).width > maxDescWidth) {
    // Split description into words
    const words = descriptionText.split(' ');
    let line = '';
    let y = startY;
    let lineCount = 0;
    
    // Create lines that fit within maxDescWidth
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const metrics = ctx.measureText(testLine);
      
      if (metrics.width > maxDescWidth) {
        // If we'd exceed the width, draw the current line and start a new one
        ctx.fillText(line, 60, y);
        line = words[i] + ' ';
        y += lineHeight;
        lineCount++;
        
        // Only allow up to 3 lines for description
        if (lineCount >= 2 && i < words.length - 1) {
          // Truncate last line with ellipsis
          while (ctx.measureText(line + '...').width > maxDescWidth && line.length > 0) {
            line = line.substring(0, line.length - 1);
          }
          line += '...';
          break;
        }
      } else {
        line = testLine;
      }
    }
    // Draw the last line
    ctx.fillText(line, 60, y);
  }
  
  // Horizontal divider
  ctx.strokeStyle = '#dee2e6';
  ctx.beginPath();
  ctx.moveTo(40, canvas.height - 100);
  ctx.lineTo(canvas.width - 40, canvas.height - 100);
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Bottom section with profile and trash button
  
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
  
  // Trash button
  ctx.fillStyle = 'transparent';
  ctx.strokeStyle = '#dc3545'; // danger color
  roundRect(ctx, canvas.width - 180, canvas.height - 80, 140, 60, 15);
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Trash text and icon
  drawTrashIcon(ctx, canvas.width - 140, canvas.height - 50);
  ctx.fillStyle = '#dc3545';
  ctx.font = 'bold 26px Arial';
  ctx.fillText('Trash', canvas.width - 120, canvas.height - 45);
  
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
  const [devicePerformance, setDevicePerformance] = useState('high'); // 'low', 'medium', 'high'
  const [webglSupported, setWebglSupported] = useState(true);
  
  // Detect device performance level on mount
  useEffect(() => {
    // Check for WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      console.warn('WebGL not supported - falling back to simpler visualization');
      setWebglSupported(false);
      return;
    }
    
    // Performance detection based on device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isOldDevice = /iPhone\s(5|6|7|8)\/|iPad\sMini/i.test(navigator.userAgent) || 
                        (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4);
    
    // Check GPU capabilities using WebGL parameters
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : '';
    const isLowEndGPU = renderer && 
                       (renderer.includes('Intel') || 
                        renderer.includes('Microsoft Basic') || 
                        renderer.includes('SwiftShader'));
    
    // Set performance level based on device capability
    if (isMobile || isOldDevice || isLowEndGPU) {
      if (isOldDevice || isLowEndGPU) {
        setDevicePerformance('low');
        console.log('Low performance device detected - using simplified visualization');
      } else {
        setDevicePerformance('medium');
        console.log('Medium performance device detected - optimizing visualization');
      }
    } else {
      console.log('High performance device detected - using full visualization');
    }
  }, []);
  
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
    
    // Handle WebGL not supported case with a simple fallback
    if (!webglSupported) {
      const fallbackDiv = document.createElement('div');
      fallbackDiv.style.position = 'fixed';
      fallbackDiv.style.top = '0';
      fallbackDiv.style.left = '0';
      fallbackDiv.style.width = '100%';
      fallbackDiv.style.height = '100%';
      fallbackDiv.style.background = 'linear-gradient(to bottom right, #e6f2ff, #ffffff)';
      fallbackDiv.style.zIndex = '-1';
      
      // Clear any existing content
      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
      
      mountRef.current.appendChild(fallbackDiv);
      return;
    }
    
    // Performance-adjusted settings
    let settings = {
      pixelRatio: 1,
      antialias: true,
      cubesPerLayer: 15,
      layers: 5,
      segmentsCount: 120,
      connections: 40,
      cardResolution: 1024,
      shouldDrawConnections: true
    };
    
    // Adjust settings based on device performance
    if (devicePerformance === 'medium') {
      settings = {
        ...settings,
        pixelRatio: Math.min(1.5, window.devicePixelRatio),
        cubesPerLayer: 10,
        layers: 4,
        segmentsCount: 80,
        connections: 30,
        cardResolution: 768
      };
    } else if (devicePerformance === 'low') {
      settings = {
        ...settings,
        pixelRatio: 1,
        antialias: false,
        cubesPerLayer: 6,
        layers: 3,
        segmentsCount: 60,
        connections: 15,
        cardResolution: 512,
        shouldDrawConnections: false
      };
    } else {
      // For high performance devices, use device pixel ratio but cap it
      settings.pixelRatio = Math.min(2, window.devicePixelRatio);
    }
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup - moved further back for better perspective
    const camera = new THREE.PerspectiveCamera(60, dimensions.width / dimensions.height, 0.1, 1000);
    camera.position.z = 60;
    
    // Error handler for WebGL context
    const onWebGLError = (error) => {
      console.error('WebGL Error:', error);
      setWebglSupported(false);
    };
    
    // Renderer setup with transparency and optimized settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: settings.antialias, 
      alpha: true,
      powerPreference: 'high-performance',
      precision: devicePerformance === 'low' ? 'lowp' : 'mediump',
      stencil: false,
      depth: true
    });
    
    renderer.setSize(dimensions.width, dimensions.height);
    renderer.setPixelRatio(settings.pixelRatio);
    renderer.setClearColor(0x000000, 0); // Transparent background
    
    // Add error handler for renderer
    renderer.domElement.addEventListener('webglcontextlost', onWebGLError, false);
    
    // Clear any existing canvas
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    
    mountRef.current.appendChild(renderer.domElement);
    
    // Lighting - optimized
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    
    // Only add directional light on medium and high performance devices
    if (devicePerformance !== 'low') {
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);
    }
    
    // Create hexagonal structure with expansion data and performance-adjusted settings
    const hexStructureData = createHexagonalStructure(scene, 
      settings.cubesPerLayer, settings.layers, settings.connections);
    
    // Task cards and connections
    const cardGroup = new THREE.Group();
    scene.add(cardGroup);
    
    // Create connections group only if needed
    const connectionsGroup = new THREE.Group();
    if (settings.shouldDrawConnections) {
      scene.add(connectionsGroup);
    }
    
    // Dynamic path parameters for continuous motion
    const pathParams = {
      minRadius: 20,
      maxRadius: devicePerformance === 'low' ? 30 : 50, // Less expansion on low-end devices
      minHeight: -15,
      maxHeight: 15,
      expansionRate: 0.0001, // How fast paths expand
      currentExpansion: 0 // Current expansion state (0-1)
    };
    
    // Create dynamic, expanding paths for cards - optimized based on device
    const createCardPath = (index, count) => {
      const pathPoints = [];
      const segments = settings.segmentsCount;
      
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
    
    // Create connections that follow dynamic paths - optimized
    const createDynamicConnections = (cards) => {
      // Skip connections on low performance devices
      if (!settings.shouldDrawConnections) return;
      
      // Clear existing connections
      while(connectionsGroup.children.length > 0) {
        connectionsGroup.remove(connectionsGroup.children[0]);
      }
      
      // Create simpler connection patterns for better performance
      const connectionPatterns = [];
      
      // Chain pattern
      connectionPatterns.push(...Array.from({ length: cards.length - 1 }, (_, i) => [i, i + 1]));
      
      // Star pattern from center only on higher performance devices
      if (devicePerformance !== 'low') {
        connectionPatterns.push(...Array.from({ length: cards.length - 1 }, (_, i) => [0, i + 1]));
      }
      
      // Random additional connections - fewer on lower performance devices
      const randomCount = devicePerformance === 'low' ? 5 : 10;
      for (let i = 0; i < randomCount; i++) {
        const fromIdx = Math.floor(Math.random() * cards.length);
        let toIdx;
        do {
          toIdx = Math.floor(Math.random() * cards.length);
        } while (toIdx === fromIdx);
        connectionPatterns.push([fromIdx, toIdx]);
      }
      
      // Create connections with optimized materials
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0x2466FF,
        transparent: true,
        opacity: 0.6,
        linewidth: 1
      });
      
      // Create connections with dynamic properties - reuse geometry and material
      const lineGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(connectionPatterns.length * 6); // 2 points * 3 coordinates per connection
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      connectionPatterns.forEach(([fromIdx, toIdx], i) => {
        if (fromIdx < cards.length && toIdx < cards.length) {
          const from = cards[fromIdx];
          const to = cards[toIdx];
          
          positions[i * 6] = from.position.x;
          positions[i * 6 + 1] = from.position.y;
          positions[i * 6 + 2] = from.position.z;
          positions[i * 6 + 3] = to.position.x;
          positions[i * 6 + 4] = to.position.y;
          positions[i * 6 + 5] = to.position.z;
        }
      });
      
      lineGeometry.attributes.position.needsUpdate = true;
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      connectionsGroup.add(lines);
    };
    
    // Create task card textures with optimized resolution
    const createOptimizedTaskCardTexture = (task) => {
      // Use optimized function parameters based on device performance
      const canvas = document.createElement('canvas');
      canvas.width = settings.cardResolution;
      canvas.height = settings.cardResolution * 0.6;
      const ctx = canvas.getContext('2d');
      
      // Use the existing createTaskCardTexture function with adjusted canvas size
      if (devicePerformance === 'low') {
        // Simplified card design for low-end devices
        ctx.fillStyle = '#ffffff';
        roundRect(ctx, 0, 0, canvas.width, canvas.height, 20);
        ctx.fill();
        
        // Status badge
        const statusColor = STATUS_COLORS[task.status] || '#6c757d';
        ctx.fillStyle = statusColor;
        roundRect(ctx, 20, 20, canvas.width * 0.2, 40, 10);
        ctx.fill();
        
        // Title
        ctx.fillStyle = '#212529';
        ctx.font = 'bold 24px Arial';
        ctx.fillText(task.title, 20, 80, canvas.width - 40);
        
        // Description
        ctx.fillStyle = '#f0f5ff';
        roundRect(ctx, 20, 100, canvas.width - 40, canvas.height - 140, 10);
        ctx.fill();
        
        ctx.fillStyle = '#000000';
        ctx.font = '20px Arial';
        ctx.fillText(task.description || 'No description', 30, 130, canvas.width - 60);
      } else {
        // Use the existing function but with the new canvas
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
        
        const scaleFactor = canvas.width / 1024; // Scale based on original 1024px width
        
        // Status badge
        const statusColor = STATUS_COLORS[task.status] || '#6c757d';
        ctx.fillStyle = statusColor;
        roundRect(ctx, 40 * scaleFactor, 40 * scaleFactor, 200 * scaleFactor, 50 * scaleFactor, 15 * scaleFactor);
        ctx.fill();
        
        // Status text
        ctx.fillStyle = '#ffffff';
        ctx.font = `bold ${28 * scaleFactor}px Arial`;
        ctx.fillText(task.status, 65 * scaleFactor, 75 * scaleFactor);
        
        // Task title
        ctx.fillStyle = '#212529';
        ctx.font = `bold ${36 * scaleFactor}px Arial`;
        ctx.fillText(task.title, 40 * scaleFactor, 140 * scaleFactor, canvas.width - 80 * scaleFactor);
        
        // Description background
        ctx.fillStyle = '#f0f5ff';
        roundRect(ctx, 40 * scaleFactor, 160 * scaleFactor, canvas.width - 80 * scaleFactor, 180 * scaleFactor, 15 * scaleFactor);
        ctx.fill();
        
        // Description text
        ctx.fillStyle = '#000000';
        ctx.font = `bold ${30 * scaleFactor}px Arial`;
        ctx.fillText('Description:', 60 * scaleFactor, 195 * scaleFactor);
        ctx.fillText(task.description || 'No description', 60 * scaleFactor, 240 * scaleFactor, canvas.width - 120 * scaleFactor);
      }
      
      // Create a texture from the canvas
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      texture.minFilter = THREE.LinearFilter; // Use LinearFilter instead of MipmapLinearFilter for performance
      texture.generateMipmaps = false; // Disable mipmaps for better performance
      return texture;
    };
    
    // Create dynamic cards with unique paths - optimized for performance
    const createDynamicCards = () => {
      // Map input tasks to ensure they have all required properties
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
      
      const cards = [];
      const cardData = [];
      
      // For low performance devices, limit the number of visible cards
      const visibleTasks = devicePerformance === 'low' ? 
        taskItems.slice(0, Math.min(6, taskItems.length)) : taskItems;
      
      // Use object pooling for card geometries and materials to reduce memory usage
      const cardGeometry = new THREE.PlaneGeometry(8, 4.8);
      
      visibleTasks.forEach((task, i) => {
        // Create optimized texture for this task
        const texture = createOptimizedTaskCardTexture(task);
        
        // Create material with texture
        const cardMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 1.0,
        });
        
        // Use MeshBasicMaterial on low-end devices for better performance
        // Only use MeshStandardMaterial on high-end devices
        if (devicePerformance === 'high') {
          cardMaterial.metalness = 0.2;
          cardMaterial.roughness = 0.7;
        }
        
        const card = new THREE.Mesh(cardGeometry, cardMaterial);
        
        // Create dynamic path for this card
        const path = createCardPath(i, visibleTasks.length);
        
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
      
      // Create initial connections (optimized)
      if (settings.shouldDrawConnections) {
        createDynamicConnections(cards);
      }
      
      return { cards, cardData };
    };
    
    // Create dynamic cards with continuous motion
    const dynamicCardsData = createDynamicCards();
    
    // Controls - only enable on higher performance devices
    let controls;
    if (devicePerformance !== 'low') {
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.15; // Slower rotation for a more subtle effect
    }
    
    // Global animation counter and performance monitoring
    let animationCounter = 0;
    let lastTime = 0;
    let frameCount = 0;
    let frameTime = 0;
    let slowFrameCount = 0;
    
    // Set animation target frame rate based on device performance
    const targetFPS = devicePerformance === 'low' ? 30 : 60;
    const targetFrameTime = 1000 / targetFPS;
    
    // Animation loop for continuous, ever-expanding animation
    const animate = (time) => {
      const animationId = requestAnimationFrame(animate);
      
      // Performance monitoring
      if (lastTime) {
        const delta = time - lastTime;
        frameTime += delta;
        frameCount++;
        
        // Count slow frames
        if (delta > targetFrameTime * 1.2) {
          slowFrameCount++;
        }
        
        // Every 60 frames, check performance
        if (frameCount === 60) {
          const avgFrameTime = frameTime / frameCount;
          const avgFPS = 1000 / avgFrameTime;
          
          // Log performance issues
          if (avgFPS < targetFPS * 0.7 || slowFrameCount > 15) {
            console.warn(`Performance issue detected: ${avgFPS.toFixed(1)} FPS, ${slowFrameCount} slow frames`);
            
            // Downgrade performance level if needed
            if (devicePerformance === 'high' && (avgFPS < 40 || slowFrameCount > 20)) {
              console.warn('Downgrading to medium performance settings');
              setDevicePerformance('medium');
              cancelAnimationFrame(animationId);
              return;
            } else if (devicePerformance === 'medium' && (avgFPS < 20 || slowFrameCount > 30)) {
              console.warn('Downgrading to low performance settings');
              setDevicePerformance('low');
              cancelAnimationFrame(animationId);
              return;
            }
          }
          
          // Reset counters
          frameCount = 0;
          frameTime = 0;
          slowFrameCount = 0;
        }
      }
      lastTime = time;
      
      // Optimize animation speed for different devices
      const speedFactor = devicePerformance === 'low' ? 0.5 : 1.0;
      animationCounter += 0.001 * speedFactor;
      
      // Skip frames on low performance devices
      if (devicePerformance === 'low' && frameCount % 2 !== 0) {
        return;
      }
      
      // Expand the hexagonal structure over time - simplified for low-end devices
      const expansionFactor = devicePerformance === 'low' ? 
        1 + 0.1 * Math.sin(animationCounter * 0.1) : 
        1 + 0.3 * Math.sin(animationCounter * 0.2);
      
      // Update rotation and movement animations based on device capability
      if (devicePerformance !== 'low') {
        hexStructureData.pulsePhase += 0.01 * speedFactor;
      }
      
      // Update each cube in the hexagonal structure - batch updates for efficiency
      hexStructureData.cubes.forEach((cube, i) => {
        if (devicePerformance === 'low' && i % 2 !== 0) return; // Skip every other cube on low-end devices
        
        const initialPos = hexStructureData.initialPositions[i];
        
        // Calculate new expanded position with pulsing effect - simpler on low-end devices
        let radius = hexStructureData.currentHexRadius;
        if (devicePerformance !== 'low') {
          radius *= (1 + 0.05 * Math.sin(animationCounter * 0.5 + initialPos.layer * 0.2));
        }
        
        const layerRadius = radius - initialPos.layer * 2;
        const angle = (initialPos.index / initialPos.totalInLayer) * Math.PI * 2;
        
        // Apply expansion factor to position
        cube.position.x = layerRadius * Math.cos(angle) * expansionFactor;
        cube.position.z = layerRadius * Math.sin(angle) * expansionFactor;
        
        // Add subtle vertical motion - only on higher-end devices
        if (devicePerformance !== 'low') {
          cube.position.y = initialPos.y + Math.sin(animationCounter * 0.5 + i * 0.1) * 0.5;
          
          // Slowly rotate each cube
          cube.rotation.x += 0.001 * Math.sin(animationCounter + i);
          cube.rotation.y += 0.001 * Math.cos(animationCounter + i);
        }
      });
      
      // Update line connections - only if we're using the optimized connection lines approach
      if (settings.shouldDrawConnections && connectionsGroup.children.length > 0) {
        // Only update on medium/high performance devices or every other frame on low performance
        if (devicePerformance !== 'low' || frameCount % 2 === 0) {
          const lineSegments = connectionsGroup.children[0];
          const positions = lineSegments.geometry.attributes.position.array;
          
          hexStructureData.lineConnections.forEach((conn, i) => {
            if (i >= positions.length / 6) return; // Skip if out of bounds
            
            const fromCube = hexStructureData.cubes[conn.fromIdx];
            const toCube = hexStructureData.cubes[conn.toIdx];
            
            positions[i * 6] = fromCube.position.x;
            positions[i * 6 + 1] = fromCube.position.y;
            positions[i * 6 + 2] = fromCube.position.z;
            positions[i * 6 + 3] = toCube.position.x;
            positions[i * 6 + 4] = toCube.position.y;
            positions[i * 6 + 5] = toCube.position.z;
          });
          
          lineSegments.geometry.attributes.position.needsUpdate = true;
        }
      }
      
      // Slowly expand the maximum path radius - simpler on low-end devices
      if (devicePerformance === 'low') {
        pathParams.maxRadius = 30 + 10 * Math.sin(animationCounter * 0.1);
        pathParams.currentExpansion = 0.5 + 0.2 * Math.sin(animationCounter * 0.1);
      } else {
        pathParams.maxRadius = 50 + 30 * Math.sin(animationCounter * 0.1);
        pathParams.currentExpansion = Math.sin(animationCounter * 0.2) * 0.5 + 0.5; // 0-1 oscillation
      }
      
      // Update cards along their paths - optimized updates
      dynamicCardsData.cardData.forEach((data) => {
        // Update progress
        data.progress += data.path.speed * data.speedFactor * speedFactor;
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
        
        // Add subtle rotation variation - only on higher-end devices
        if (devicePerformance !== 'low') {
          data.card.rotation.z = Math.sin(animationCounter * 0.5 + data.pulsePhase) * 0.1;
          
          // Subtle size pulsing
          const scaleFactor = 1 + 0.05 * Math.sin(animationCounter * 0.3 + data.pulsePhase);
          data.card.scale.set(scaleFactor, scaleFactor, 1);
        }
      });
      
      // Update card connections - with optimized approach
      if (settings.shouldDrawConnections && connectionsGroup.children.length > 1) {
        // Only update on higher performance devices
        if (devicePerformance !== 'low') {
          const lines = connectionsGroup.children[1];
          if (lines && lines.geometry && lines.geometry.attributes.position) {
            const positions = lines.geometry.attributes.position.array;
            
            for (let i = 0; i < Math.min(dynamicCardsData.cards.length - 1, positions.length / 6); i++) {
              const fromCard = dynamicCardsData.cards[i];
              const toCard = dynamicCardsData.cards[(i + 1) % dynamicCardsData.cards.length];
              
              positions[i * 6] = fromCard.position.x;
              positions[i * 6 + 1] = fromCard.position.y;
              positions[i * 6 + 2] = fromCard.position.z;
              positions[i * 6 + 3] = toCard.position.x;
              positions[i * 6 + 4] = toCard.position.y;
              positions[i * 6 + 5] = toCard.position.z;
            }
            
            lines.geometry.attributes.position.needsUpdate = true;
          }
        }
      }
      
      // Slowly rotate the entire hexagonal structure
      if (devicePerformance === 'low') {
        // Simple rotation for low-end devices
        hexStructureData.group.rotation.y += 0.002 * speedFactor;
      } else {
        hexStructureData.group.rotation.x = Math.sin(animationCounter * 0.1) * 0.2;
        hexStructureData.group.rotation.y = Math.cos(animationCounter * 0.15) * 0.3;
      }
      
      // Update controls only if they exist
      if (controls) {
        controls.update();
      }
      
      renderer.render(scene, camera);
    };
    
    animate(0);
    
    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = dimensions.width / dimensions.height;
      camera.updateProjectionMatrix();
      renderer.setSize(dimensions.width, dimensions.height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      // Remove event listeners
      window.removeEventListener('resize', handleResize);
      if (renderer?.domElement) {
        renderer.domElement.removeEventListener('webglcontextlost', onWebGLError);
      }
      
      // Cancel animation frame
      cancelAnimationFrame(animate);
      
      // Clean up DOM
      if (mountRef.current?.contains(renderer?.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of resources
      if (scene) {
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
      }
      
      if (renderer) renderer.dispose();
      if (controls) controls.dispose();
    };
  }, [dimensions.width, dimensions.height, tasks, devicePerformance, webglSupported]);
  
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
        pointerEvents: 'none'
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