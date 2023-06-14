function PropertyDetailsElement({ title, children }) {
  return children ? (
    <div  >
      <span
        style={{
          fontSize: 18,
        }}
      >
        {title}
      </span>
      <div
        style={{
          fontWeight: 700,
          fontSize: 20,
        }}
      >
        {children}
      </div>
    </div>
  ) : null;
}

export default PropertyDetailsElement;
