import { SocialLinks } from "../constants";

const SocialMedia = () => {
  return (
    <div className="flex absolute -left-4 top-1/2">
        <ul className="flex flex-col gap-20 flex-1 justify-between ">
            {SocialLinks.map((socialLink) => (
                <li key={socialLink.id} className="text-white -rotate-90 cursor-pointer"><a href={socialLink.link}>{socialLink.socialname}</a></li>
            ))}
        </ul>
    </div>
  )
}

export default SocialMedia