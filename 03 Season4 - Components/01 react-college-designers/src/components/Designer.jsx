function Designer({ name, image, meta, description }) {
  return (
    <div className="designer">
      <img src={image} alt={name} className="image" />
      <div className="content">
        <h4 className="name">{name}</h4>
        <p className="meta">{meta}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default Designer;
