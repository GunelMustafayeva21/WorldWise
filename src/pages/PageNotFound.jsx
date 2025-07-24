export default function PageNotFound() {

  const pageStyle={
    width:"100vw",
    height:"100vh",
    backgroundColor:"black",
    color:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"30px"
  }
  return (
    <div style={pageStyle}>
      <h1>Page not found </h1>
    </div>
  );
}