# Fang Lab website for GitHub Pages

This package contains a complete static website with the Fang Lab design, photographs, and eleven pages. No installation, npm build, server, or ChatGPT sign-in is needed for the website itself.

## Publish from the GitHub website

1. Unzip `Fang_Lab_GitHub_Pages.zip` on your computer.
2. Create a new GitHub repository named `fang-lab`. For GitHub Free, use a public repository. Select the option to add a README if GitHub requires an initial commit.
3. In the repository, select **Add file → Upload files**. Open the extracted `fang-lab-github` folder and upload its contents, including the `images` folder. Commit the upload to `main`.
4. Confirm that `index.html`, `styles.css`, `script.js`, and the `images` folder are directly at the top level of the repository. Do not upload only the ZIP or place the entire website inside another folder.
5. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and `/(root)`, then save.
6. Wait for the deployment to complete and use **Visit site** in the Pages settings to open the published website.

GitHub may take several minutes to finish publishing. The final URL is shown in the repository's Pages settings. The website uses relative paths and works for project repositories, account sites, and custom domains.

GitHub Pages documentation

https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Edit the website

- Edit home page text in `index.html`.
- Edit each tab in its matching HTML file, such as `education.html` or `people.html`.
- Edit colors, fonts, spacing, and mobile layouts in `styles.css`.
- Edit search, filtering, menu, and gallery behavior in `script.js`.
- Replace or add photographs inside `images` and update the matching `src` attributes in HTML.
- Each page has a shared header and footer. If changing shared contact or navigation details, update them in all eleven HTML files.
- Use GitHub's file editor and commit changes to publish updates automatically.

The design uses Google Fonts when available and local fallback fonts otherwise. All photographs, icons, CSS, and JavaScript are included in this package. No external JavaScript library or authentication service is required.

## Included pages

| File | Tab |
| --- | --- |
| `index.html` | Home |
| `research.html` | Research |
| `people.html` | People |
| `publications.html` | Publications |
| `news.html` | News |
| `education.html` | Education |
| `innovation.html` | Innovation and IP |
| `outreach.html` | Outreach |
| `gallery.html` | Gallery |
| `join.html` | Join Us |
| `contact.html` | Contact |

## Review notes

Education and outreach additions remain labeled as proposed content for Prof. Fang's review. Confirm the current team roster, roles, training activities, and opportunities before using the website as an official lab resource. The Publications page includes all 107 records from Prof. Fang’s public NCBI bibliography, consolidated into 104 entries with three earlier preprints grouped under their published versions. One book chapter from her faculty profile brings the displayed total to 105. The source pages were checked on November 8, 2026. The year filter follows the final published version when a preprint is grouped with it.

Photographs and established lab content come from the existing University of Illinois Fang Lab website. Reuse in this lab website does not grant a general license for unrelated uses. University branding and official hosting arrangements can be reviewed with the College when moving beyond the draft.

## Content organization

- People contains current appointments, affiliations, career history, and honors.
- Education contains verified academic training and clearly labeled proposed lab learning content.
- Research contains mechanistic discoveries, funding context, and projects.
- Innovation contains the PREVACENT, Swinecheck MP, and EZ-PRRSV technologies.
- News contains unique press stories, with additional reporting on the same study grouped together.
- Contact contains the lab mailing address.
- Publications contains the complete imported collection and the additional book chapter.

## Content sources

- https://vetmed.illinois.edu/fang-lab/
- https://vetmed.illinois.edu/fang-lab/research/
- https://vetmed.illinois.edu/fang-lab/about/
- https://vetmed.illinois.edu/fang-lab/about/professor/
- https://vetmed.illinois.edu/fang-lab/career/
- https://vetmed.illinois.edu/directory/profile/?id=yingf
- https://vetmed.illinois.edu/2025/12/18/investiture-for-zhang-chair-and-fang-professorship/
- https://vetmed.illinois.edu/2025/09/11/research-spotlight-ying-fang/
- https://vetmed.illinois.edu/2024/12/13/faculty-member-elected-to-national-academy-of-inventors/
- https://vetmed.illinois.edu/2023/07/06/all-species-coronavirus-test/
- https://doi.org/10.1128/msphere.00067-23
- https://doi.org/10.1073/pnas.1211145109
- https://doi.org/10.1128/JVI.01032-06

Additional navigation was inspired by https://sites.google.com/site/xingwangslab/news


- https://www.ncbi.nlm.nih.gov/myncbi/ying.fang.4/bibliography/public/
