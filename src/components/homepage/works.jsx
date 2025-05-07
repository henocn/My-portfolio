import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="My Journey"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./uk.jfif"
								alt="univerity of Kara"
								className="work-image"
							/>
							<div className="work-title">University of Kara</div>
							<div className="work-subtitle">
								Computer science Student
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="./fss.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">FSS UK</div>
							<div className="work-subtitle">
								Medical Student
							</div>
							<div className="work-duration">2021 - 2022</div>
						</div>

						<div className="work">
							<img
								src="./bakhita.webp"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">CSJ Bakhita high school</div>
							<div className="work-subtitle">
								Science student at high school
							</div>
							<div className="work-duration">2019 - 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
