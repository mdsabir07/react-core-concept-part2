export default function Friend({ friend }) {
    console.log(friend)
    const { name, email, phone } = friend;
    return (
        <div>
            
            <h4>Name: {name}</h4>
            <small>email: {email}</small>
            <p>Phone: {phone}</p>
        </div>
    )
}