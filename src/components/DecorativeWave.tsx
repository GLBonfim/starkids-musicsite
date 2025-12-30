interface DecorativeWaveProps {
  position?: 'top' | 'bottom';
  color?: 'blue' | 'yellow' | 'pink';
  opacity?: number;
}

export default function DecorativeWave({ 
  position = 'top', 
  color = 'blue',
  opacity = 0.1 
}: DecorativeWaveProps) {
  
  const colors = {
    blue: '#1890ff',
    yellow: '#ffb300',
    pink: '#FF6B9D',
  };

  const fillColor = colors[color];

  return (
    <div className={`relative h-24 overflow-hidden ${
      position === 'top' ? 'rotate-180' : ''
    }`}>
      <svg 
        className="absolute bottom-0 w-full h-24" 
        viewBox="0 0 1440 120" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0,0 C480,80 960,80 1440,0 L1440,120 L0,120 Z" 
          fill={fillColor}
          opacity={opacity}
        />
      </svg>
    </div>
  );
}