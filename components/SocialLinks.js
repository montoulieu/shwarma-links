import socialLinks from '../json/social-links.json'

function SocialLinks() {
  return (
    <>
      <p className="text-xl pt-6">links to music:</p>
      <ul className="pt-2">
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
    </>
  );
}

export default SocialLinks;
