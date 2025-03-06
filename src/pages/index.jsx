import { useState } from 'react';
import { SiEbox } from "react-icons/si";
import Header from '../components/header/header';

export default function Index() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div 
          className="card shadow" 
          style={{ 
            width: isFlipped ? "90%" : "150px", 
            height: isFlipped ? "80vh" : "150px", 
            maxWidth: isFlipped ? "800px" : "150px",
            maxHeight: isFlipped ? "600px" : "150px",
            perspective: "1000px", 
            cursor: "pointer",
            borderRadius: "15px",
            border: "none",
            transition: "width 0.6s, height 0.6s, max-width 0.6s, max-height 0.6s"
          }}
          onClick={handleFlip}
        >
          <div 
            style={{ 
              position: "relative", 
              width: "100%", 
              height: "100%", 
              transition: "transform 0.6s", 
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
            }}
          >
            <div 
              className="d-flex justify-content-center align-items-center" 
              style={{ 
                position: "absolute", 
                width: "100%", 
                height: "100%", 
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                borderRadius: "15px"
              }}
            >
              <SiEbox color="#2466FF" size={64} />
            </div>
            <div 
              style={{ 
                position: "absolute", 
                width: "100%", 
                height: "100%", 
                backfaceVisibility: "hidden", 
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                backgroundColor: "#f8f9fa",
                borderRadius: "15px",
                overflow: "auto"
              }}
            >
              <div className="card-header text-center py-3" style={{ borderBottom: "1px solid #dee2e6",color: "#2466FF", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}>
                <SiEbox color="#2466FF" size={24} className="me-2" />
                <span>task</span><span className="fw-bold">shift</span>
              </div>
              <div className="d-flex justify-content-center align-items-center" style={{ height: "calc(100% - 56px)" }}>
                <p className="text-center mb-0">
                  <span className="text-muted">task</span>shift
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}