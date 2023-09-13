export default function NavBar(props) {
    console.log(props);
    return (
        <li><a href={props.address}>{props.title}</a></li>
    )
}