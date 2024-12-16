import React from "react";
import "./SocialMedia.scss";
import CreateListItem from "./CreateListItem.jsx";

function SocialMedia({ justifyContent }) {
	const socialMedia = [
		{
			socialName: "linkedin",
			socialLink: "https://www.linkedin.com/in/ahmed-maher-algohary",
			GoTo: "LinkedIn",
			iconName: "linkedin",
		},
		{
			socialName: "github",
			socialLink: "https://github.com/Ahmed-Maher77",
			GoTo: "GitHub",
			iconName: "github",
		},
		{
            socialName: "facebook",
			socialLink: "https://www.facebook.com/AhmedMaher77/",
			GoTo: "Facebook",
			iconName: "facebook",
		},
		{
            socialName: "gmail",
			socialLink: "ahmedmaher.dev1@gmail.com",
			GoTo: "Gmail",
			iconName: "gmail",
		},
        {
            socialName: "whatsapp",
            socialLink: "https://wa.me/+201150383416",
            GoTo: "WhatsApp",
            iconName: "whatsapp",
        },
        {
            socialName: "telegram",
            socialLink: "https://t.me/Ahmed_Maher77",
            GoTo: "Telegram",
            iconName: "telegram",
        },
	];

	return (
		<ul className={`social-icons flex gap-2 ${justifyContent} mt-8 text-slate-700 flex-wrap`}>
			{socialMedia.map(social => (
				<CreateListItem
					socialName={social.socialName}
					socialLink={social.socialLink}
					GoTo={social.GoTo}
					iconName={social.iconName}
					key={social.socialName}
				/>
			))}
		</ul>
	);
}

export default SocialMedia;
