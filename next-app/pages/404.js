import Link from "next/link";

const Sorry = () => {
    return ( 
        <div className="sorry-page">
            <h1>Oops ...</h1>
            <p>That page cannot be found.</p>
            <p>Go back to <Link href="/"><a>Home Page</a></Link></p>
        </div>
     );
}
 
export default Sorry;