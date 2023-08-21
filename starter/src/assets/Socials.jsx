const Socials = ({unSocial}) => {
 
  return (
    <li>
      <a href={unSocial.url} className="socialsIcon">{unSocial.icon}</a>
    </li>
  )
}
export default Socials