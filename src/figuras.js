//array maestro de imagenes
export const grupoFiguras=[
    "../imagenes/granpremio.svg","../imagenes/siete.svg","../imagenes/sandia.svg",
    "../imagenes/platanos.svg","../imagenes/limon.svg","../imagenes/naranja.svg",
    "../imagenes/fresa.svg","../imagenes/cereza.svg","../imagenes/ciruela.svg"
    ]

// creación de objeto figuras
export const arrayObjFiguras=()=>{
  const objFiguras = [
    {
      "id":1,
      "nombre":"ciruela",
    "ruta":  "../imagenes/ciruela.svg",
    "valor": 0.05
    },{
      "id":2,
      "nombre":"cereza",
    "ruta":  "../imagenes/cereza.svg",
    "valor": 0.10 
    },{
      "id":3,
      "nombre":"fresa",
    "ruta":  "../imagenes/fresa.svg",
    "valor": 0.20
    },{
      "id":4,
      "nombre":"naranja",
    "ruta":  "../imagenes/naranja.svg",
    "valor": 0.5
    },{
      "id":5,
      "nombre": "limon",
    "ruta":  "../imagenes/limon.svg",
    "valor": 1
    },{
      "id":6,
      "nombre": "Platanos",
    "ruta":  "../imagenes/platanos.svg",
    "valor": 2
    },{
      "id":7,
      "nombre": "sandia",
    "ruta":  "../imagenes/sandia.svg",
    "valor": 5
    },{
      "id":8,
      "nombre": "siete",
    "ruta":  "../imagenes/siete.svg",
    "valor": 10
    },{
    "id":9,
    "nombre": "granpremio",
    "ruta":   "../imagenes/granpremio.svg",
    "valor":  20
  }
]
return(
  objFiguras
)
}