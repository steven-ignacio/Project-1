app.component('resume', {
    template:
        /*html*/
        `<div>
        <h1>Steven Jerick G. Ignacio</h1>
        <h3>Software Developer</h3>
        <div class="info">
            <p style="display: flex; gap: 0.5rem; align-items: center;"><i class="fa-solid fa-envelope"></i>
                stevenignacio45@yahoo.com</p>
            <div class="phone">
                <p><i class="fa-solid fa-diamond"></i></p>
                <p style="display: flex; gap: 0.5rem; align-items: center;">
                    <i class="fa-solid fa-phone"></i>
                    +639175444728
                </p>
                <p><i class="fa-solid fa-diamond"></i></p>
            </div>
            <p><i class="fa-brands fa-github"></i> <a href="https://github.com/steven-ignacio" target="_blank">github.com/steven-ignacio</a></p>
            <br />
            <p style="display: flex; gap: 0.5rem; align-items: center;"><i class="fa-solid fa-location-dot"></i>
                Paranaque City, Metro Manila</p>
        </div>
        <hr class="hr-solid" />

        <h5><i class="fa-solid fa-pencil"></i> <strong>PROJECTS</strong></h5>
        <hr />
        <div class="projects-banner block">
            <a href="https://groceline.vercel.app/" class="groceline-tab" target="_blank">
                Groceline (WIP)
            </a>

            <a href="" class="pending-tab">
                Pending...
            </a>

            <a href="" class="pending-tab">
                Pending...
            </a>
        </div>
        <div class="block">
            <h5><i class="fa-solid fa-book-open"></i> <strong>EDUCATION</strong></h5>
            <hr />
            <div class="flexjustify">
                <p><strong>De La Salle College of Saint Benilde</strong></p>
                <p style="text-align: right"><strong>April 2022</strong></p>
            </div>
            <div class="flexjustify">
                <p>Bachelor of Science in Information Systems</p>
                <p style="text-align: right">Malate, Manila, Metro Manila </p>
            </div>
        </div>

        <div class="block">
            <h5><i class="fa-solid fa-paperclip"></i> <strong>EXPERIENCE</strong></h5>
            <hr />
            <div class="flexjustify">
                <strong>PlasticBank</strong>
                <strong>July 2021 - September 2021</strong>
            </div>
            <i class="fa-solid fa-magnifying-glass"></i> Software Quality Assurance Intern
            <ul>
                <li>As part of the Software quality assurance team I tested features of the company’s mobile and web
                    application to ensure that they are working according to specifications.</li>
                <ul>
                    <li>Documented the features of some web application pages for future reference.</li>
                    <li>Created and performed hundreds of step-by-step test cases to check for errors in app functionality
                        using Jira.</li>
                    <li>Created detailed tickets that reported the bugs found in testing.</li>
                    <li>Performed sanity testing to ensure that previously tested features are still working as expected.
                    </li>
                    <li>Communicated with the developers to clarify some issues, as well as demonstrate the discovered bugs.
                    </li>
                </ul>
            </ul>
        </div>

        <h5><i class="fa-solid fa-screwdriver-wrench"></i> <strong>SKILLS</strong></h5>
        <hr />
        <div class="block">
            <ul>
                <li><strong>Technical skills:</strong></li>
                <div class="flexjustifylist block">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>C#(.NET)</li>
                        <li>PHP</li>
                    </ul>
                    <ul>
                        <li>JavaScript</li>
                        <li>(Vue.js)</li>
                        <li>Database (MSSQL, MySQL)</li>
                        <li>Jira Software</li>
                    </ul>
                </div>
                <li><strong>Soft skills:</strong> Problem solving, attention to detail, openness to criticism, communication, teamwork, curiosity</li>
            </ul>
        </div>

        <div class="block">
            <h5><i class="fa-solid fa-globe"></i> <strong>ONLINE COURSES</strong></h5>
            <hr />
            <ul>
                <li>Modern JavaScript by Shaun Pelling</li>
                <li>Vue.Js 3 Tutorial by Shaun Pelling</li>
            </ul>
        </div>
    </div>`
});