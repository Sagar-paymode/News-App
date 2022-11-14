

const Wrapper = (Component)=>({...props})=>(
    <div style={{border:'2px solid blue',borderRadius:'3px'}}>
        <h1>This is the Wrapper content</h1>
        <Component {...props}/>
    </div>
)
export default Wrapper;