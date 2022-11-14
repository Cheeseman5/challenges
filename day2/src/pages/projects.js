import React from "react";

const Projects = () => {
    return (
        <div class="content">
            <div class="label">
                <h1 class="header-label">&gt; Projects</h1>
                <h1 class="label-cursor blink">_</h1>
            </div>
            <ul>
                <li class="proj-li">
                    <h3><a href="https://github.com/Cheeseman5/pdftoolbox" class="proj-name proj-link">pdftoolbox</a></h3>
                    <p class="proj-desc">
                        The best and easiest free, opensource PDF manipulation app around!  Functionally similar to and an uplift/rewrite of it's popular <a href="https://github.com/Cheeseman5/PDF-Toolbox">predecessor</a> made in WPF.
                    </p>
                </li>
                <li class="proj-li">
                    <h3><a href="https://github.com/Cheeseman5/toolbox" class="proj-name proj-link">toolbox</a></h3>
                    <p class="proj-desc">
                        General grab-bag of helpful scripts and tools.
                    </p>
                </li>
                <li class="proj-li">
                    <h3><a href="https://github.com/Cheeseman5/PDF-Toolbox" class="proj-name proj-link">PDF-Toolbox</a></h3>
                    <p class="proj-desc">
                        An opensource solution for easy and intuitive PDF manipulation.
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default Projects;