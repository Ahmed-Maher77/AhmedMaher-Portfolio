function CreateListItem({ socialName, socialLink, GoTo, iconName }) {
    return (
        <li>
            <a
                className={`${socialName} flex justify-center items-center text-[1.4rem] w-full h-full rounded-full p-1`}
                href={socialName == "gmail"? `mailto:${socialLink}?subject=Let's work together` : socialLink}
                title={`go to ${GoTo}`}
                target="_blank"
            >
                <i className={`bx bxl-${iconName} rounded-full p-2`}></i>
                <span className="social-text text-base w-0 overflow-hidden trans-3">{GoTo}</span>
            </a>
        </li>
    )
}

export default CreateListItem;