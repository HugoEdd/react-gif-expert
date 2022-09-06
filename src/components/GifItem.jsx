export const GifItem = ({title, url, id}) => {

    // console.log({title, url, id}); Tomamos las properties que nos manda el otro componente

  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{title}</p>
    </div>
  )
}
