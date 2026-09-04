function PhonePreview({ variant = 'festival', className = '' }) {
  return (
    <div className={`phone-preview ${variant} ${className}`.trim()} aria-hidden="true">
      <div className="phone-speaker" />
      <div className="phone-screen">
        {variant === 'festival' ? (
          <>
            <span className="screen-label">BLA SOL</span>
            <span className="screen-sun">SOL</span>
            <span className="screen-wave" />
            <span className="screen-button">GET TICKETS</span>
          </>
        ) : (
          <>
            <span className="plant plant-one" />
            <span className="plant plant-two" />
            <span className="screen-label">BOTANICAL<br />GARDEN</span>
            <span className="screen-button">EXPLORE</span>
          </>
        )}
      </div>
      <div className="phone-home" />
    </div>
  )
}

export default PhonePreview
