
import './Blogs.css'
const Carts = ({selects,remaining,totalCredit,totalUsd}) =>{
    return (
        <div className="fullCart">
        
        <h1 className="text-lg font-bold"style={{color:'#8AB8F5'}}>Credit Hour Remaining {remaining} hr</h1>
        <h1 className="border-b-2 pt-3"></h1>
            <h1 className="text-xl font-bold pb-3 pt-2">Course Name</h1>
            {
                selects.map(name =>(
                    <ol style={{paddingLeft:'20px'}}>
                    <li key={name.id} style={{listStyle:'decimal',color:'#777676'}}>{name.title}</li>
                    </ol>
                ))
            }
            <h1 className="border-b-2 pt-3"></h1>
            <h1 className='pt-3'>Total Credit Hour : {totalCredit} hr</h1>
            <h1 className="border-b-2 pt-3"></h1>
            <h1 className='font-bold pt-3'>Total Price : {totalUsd} USD</h1>
            
        </div>
    )
}
export default Carts;