import socialLinks from '../json/social-links.json'

function SocialLinks() {
  return (
    <ul className="pt-6">
      {socialLinks.map(link => (
        <li className="mx-3 inline" key={link.icon}>
          <a
            className="text-purple-400 duration-200 hover:text-purple-600"
            href={link.url}
            target="_blank"
            rel="noopener"
            alt={link.icon}
          >
            <i className={`fa fa-2x fa-${link.icon}`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
