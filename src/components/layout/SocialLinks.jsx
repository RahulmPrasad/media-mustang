const socials = [
  ["https://www.facebook.com/mediamustang", "fa-facebook-f"],
  ["https://twitter.com/Mediamustang_", "fa-x-twitter"],
  ["https://www.threads.net/@media_mustang", "fa-threads"],
  ["https://www.instagram.com/media_mustang/", "fa-instagram"],
  ["https://www.linkedin.com/in/media-mustang-0967aa28b/", "fa-linkedin"],
  ["https://medium.com/@mediamustang", "fa-medium"],
  ["https://www.youtube.com/@MediaMustang-fg1dw/featured", "fa-youtube"],
  ["https://in.pinterest.com/mediamustang55/", "fa-pinterest"],
  ["https://www.tumblr.com/blog/mediamustang11", "fa-tumblr"],
];

export default function SocialLinks({ className = "social-area-one" }) {
  return (
    <ul className={className}>
      {socials.map(([href, icon]) => (
        <li key={icon}>
          <a href={href}>
            <i className={`fa-brands ${icon}`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}
