export default function App() {
  return (
    <div className="bg">
      <svg className="waves" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0f9b8e" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
          <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="40" />
          </filter>
        </defs>
        <rect width="1440" height="900" fill="url(#g1)" opacity="0.6" />
        <g filter="url(#blur)" opacity="0.7">
          <path fill="url(#g2)" d="M0,400 C240,300 480,500 720,400 C960,300 1200,500 1440,400 L1440,900 L0,900 Z">
            <animateTransform attributeName="transform" type="translate" values="0 0;-120 0;0 0" dur="12s" repeatCount="indefinite" />
          </path>
          <path fill="url(#g1)" d="M0,500 C240,420 480,580 720,500 C960,420 1200,580 1440,500 L1440,900 L0,900 Z" opacity="0.8">
            <animateTransform attributeName="transform" type="translate" values="0 0;120 0;0 0" dur="16s" repeatCount="indefinite" />
          </path>
          <path fill="url(#g2)" d="M0,600 C240,540 480,660 720,600 C960,540 1200,660 1440,600 L1440,900 L0,900 Z" opacity="0.6">
            <animateTransform attributeName="transform" type="translate" values="0 0;-80 0;0 0" dur="20s" repeatCount="indefinite" />
          </path>
        </g>
      </svg>
    </div>
  )
}
