
import './Blogs.css'
const Carts = ({selects,remaining,totalCredit}) =>{
    return (
        <div className="fullCart">
        
        <h1 className="border-b-2 text-lg font-bold"style={{color:'#8AB8F5'}}>Credit Hour Remaining {remaining} hr</h1>
            <h1 className="border-b-2 text-xl font-bold">Course Name</h1>
            {
                selects.map(name =>(
                    <li key={name.id}>{name.title}</li>
                ))
            }
            <h1 className="border-b-2">Total Credit Hour : {totalCredit}</h1>
            <h1>Total Price : USD</h1>
            
        </div>
    )
}
export default Carts;