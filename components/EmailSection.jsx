import React from "react";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import InstagramIcon from "../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";
import GmailIcon from "../public/gmail-icon.svg";

const EmailSection = () => { 
    return (
        <main className="grid md:grid-cols-2 my-12 md:my-12 py-24 md:py-24 gap-4 relative" id="contact">
            <div className="z-10">
                <h5 className="text-4xl font-bold text-white my-2">Let&apos;s Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md mt-8 text-justify">
                    I&apos;m currently looking for new opportunities in the cybersecurity industry, and my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <h4 className="pb-3 mt-6">Let&apos;s get in touch!</h4>
                <div className="flex flex-row gap-4 mt-6">
                    <Link href="https://github.com/calvin0502">
                        <Image src={GithubIcon} alt="Github" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/lai-calvin-a5140a2a2/">
                        <Image src={LinkedinIcon} alt="Linkedin" />
                    </Link>
                    <Link href="https://www.instagram.com/calvin_0205_/" className="mt-1">
                        <Image src={InstagramIcon} alt="Instagram" />
                    </Link>
                    <Link href="mailto:laicalvin93@gmail.com" className="mt-1">
                        <Image src={GmailIcon} alt="Gmail" />
                    </Link>
                </div>
            </div>
            <div className="w-[400px] h-[400px] relative z-0">
                <Image
                    src="/Hero-Section.png"
                    alt="Hero Section"
                    className="transform rounded-full flex relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={450}
                    height={450}
                />
            </div>
        </main>
    );
};

export default EmailSection;
