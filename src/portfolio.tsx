import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'SEOKJU LEE',
	title: 'Good Day! 이석주입니다',
	subTitle: emoji("📱010-8273-0019"),
	role: "Jr. Front-end Developer",
	resumeLink: "https://drive.google.com/file/d/1hPt74p_YeBCCeJMKMAvhRRyi15j8GdF5/view?usp=sharing",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/sbbtt',
	linkedin: '',
	email: 'sbbt@naver.com',
	facebook: '',
	twitter: "",
	instagram: "https://sbbt.tistory.com/",
	medium: '',
	stackoverflow: ''
};

export const skills = {
	title: emoji("I Can Do ⚡"),
	subTitle: "🔰 Beginner Standard",
	describeSkills: [
		emoji("✔ Vanilla JS"),
		emoji("✔ React JS"),
		emoji("✔ Redux"),
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 70},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 60},
		{fontAwesome: "fab fa-js", text: "JavaScript", proficiency: 70},
		{fontAwesome: "fab fa-sass", text: "Sass", proficiency: 30},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 60},
	],
	view: true
};

export const experience = {
	title: "Work Experience",
	lists: [
		{
			date: "2020.06~2021.01",
			company: "Ktis",
			role: "System Engineer",
		},
		{
			date: "2019.09~2020.04",
			company: "비트캠프",
			role: "국비지원 자바교육과정",
		},
		{
			date: "2018~2019",
			company: "Working Holiday",
			role: "Australia",
		},
		{
			date: "2015 ~ 2018",
			company: "MTC International",
			role: "HSE Engineer",
		},
		{
			date: "Casual",
			company: "Variety of part time jobs",
			role: "Part-timer",
		}
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: true
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "사진들이 필요할것같다 for projects",
	lists: [
		{
			title: "의류 쇼핑몰",
			desc: "very very very very very very very very very very very very very very long very long description for clamp testing",
			url: "https://sbbtt.github.io/js-clock/"
		},
		{
			title: "영화 평점사이트",
			desc: "description",
			url: "https://sbbtt.github.io/movie_app_2020/#/"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!",
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: true
};

export const blogs = {
	title: emoji("My 블로그"),
	subTitle: "all by myself",
	lists: [
		{
			title: "To-do list",
			desc: "JS 활용한 투두리스트",
			url: "https://sbbtt.github.io/js-clock/"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: false
}

export const contactInfo = {
	title: "Contact Me 📞",
	subTitle: "	📱010-8273-0019",
	introduce: emoji(" 편하게 연락주세요☀️🌛"),
	view: true
}