# Portfolio Template 4 - Saadi Safdar

This is a complete portfolio website based on the design from [Guglielmo Cerri's portfolio](https://guglielmocerri.github.io/) with customizations for Saadi Safdar.

## Features

- **Responsive Design**: Works on all device sizes
- **Dark/Light Theme**: Toggle between dark and light modes
- **Modern UI**: Clean, professional design with smooth animations
- **Complete Sections**:
  - Home (Hero section with avatar and social links)
  - About (Personal introduction with stats)
  - Skills (Organized by categories with progress bars)
  - Qualifications (Education and Work experience tabs)
  - Expertise (Modal-based detailed descriptions)
  - Courses (Certifications and learning achievements)
  - Contact (Form and contact information)

## Customizations Made

1. **Removed Articles Section**: As requested, the Articles section was completely removed
2. **Added Courses Section**: Replaced Portfolio with Courses section showcasing certifications
3. **Personal Data**: All content populated with Saadi Safdar's information from existing templates
4. **Improved Structure**: Better organization and cleaner code

## Files Structure

```
template-4/
├── index.html          # Main HTML file
├── README.md           # This file
└── assets/
    ├── css/
    │   └── styles.css  # All styles and responsive design
    ├── js/
    │   └── main.js     # JavaScript for interactions
    ├── img/
    │   ├── avatar.png  # Profile picture (copied from template-2)
    │   ├── about.jpg   # About section image (PLACEHOLDER - needs replacement)
    │   └── README.txt  # Image placeholder instructions
    └── pdf/
        └── Saadi_Safdar_CV.pdf  # CV file (PLACEHOLDER - needs replacement)
```

## What You Need to Do

### 1. Replace Placeholder Images
- **about.jpg**: Add a professional photo for the About section
  - Recommended: 350x350 pixels or larger
  - Format: JPG or PNG
  - Place in: `assets/img/about.jpg`

### 2. Replace CV PDF
- **Saadi_Safdar_CV.pdf**: Add your actual CV
  - Place in: `assets/pdf/Saadi_Safdar_CV.pdf`
  - The download button in the About section will link to this file

### 3. Update Personal Information (Optional)
If any of your information has changed, update it in:
- `index.html` - All text content, links, and descriptions
- Check the following sections:
  - Home section (name, title, description)
  - About section (bio, stats)
  - Skills section (skill names and percentages)
  - Qualifications section (education and work history)
  - Expertise section (areas of expertise)
  - Courses section (certifications and links)
  - Contact section (email, phone, location, social links)

### 4. Update Social Links
Verify all social media links in:
- Home section social icons
- Footer social icons
- Contact information

Current links:
- LinkedIn: https://www.linkedin.com/in/saadisafdar/
- GitHub: https://github.com/saadisafdar
- Twitter/X: https://x.com/saadisafder
- Instagram: https://www.instagram.com/saadisafdar/
- Email: saadisafdar426@gmail.com
- Phone: +92 345 8578173

### 5. Update Course Links
All course links in the Courses section should be verified:
- Coursera: https://coursera.org/share/af4e24c3951c129d60e4a0eba503b5da
- Google Developers: https://g.dev/saadisafdar
- Credly: https://www.credly.com/users/saadisafdar
- Microsoft Learn: https://learn.microsoft.com/en-us/users/saadisafdar/
- Kaggle: https://www.kaggle.com/saadisafdar
- HubSpot Academy: https://app-na2.hubspot.com/academy/achievements/754pxvx3/en/1/saadi-safdar/digital-marketing-certified
- Anthropic (Skilljar): https://verify.skilljar.com/c/ey2p2ic7pg6h
- LinkedIn Learning: https://www.linkedin.com/learning/certificates/1ec16043e53de566c12905f41ffab3f96c464fd089f61fcab178ad96b83f2490?trk=share_certificate
- Forage: https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a01b890ab0622a2db104eed_1781431730387_completion_certificate.pdf

## How to Use

### Local Development
1. Open `index.html` in any modern web browser
2. The site will work without a server (all dependencies are loaded from CDNs)

### Deployment
1. Upload all files to your web hosting
2. Ensure the directory structure is preserved
3. Access via your domain or GitHub Pages

### GitHub Pages Deployment
1. Push this folder to your GitHub repository
2. Go to Settings > Pages
3. Select the branch and folder (usually `/root` or `/template-4`)
4. Save and your site will be live

## Technical Details

### Dependencies (Loaded from CDNs)
- **Unicons**: https://unicons.iconscout.com/ - Icon library
- **Font Awesome**: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/ - Additional icons
- **Swiper**: https://unpkg.com/swiper@8/ - Touch slider (not heavily used in this version)
- **Google Fonts**: Poppins font family

### Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome for Android)

## Customization Tips

### Change Color Theme
Edit the `--hue-color` variable in `assets/css/styles.css`:
```css
:root {
    --hue-color: 224; /* Blue */
    /* Try: 142 (Green), 250 (Purple), 340 (Pink) */
}
```

### Add More Skills
In `index.html`, add new skill items following the existing pattern:
```html
<div class="skills__data">
    <div class="skills__titles">
        <h3 class="skills__name">Skill Name</h3>
        <div class="skills__number">XX%</div>
    </div>
    <div class="skills__bar">
        <div class="skills__percentage skills__customname"></div>
    </div>
</div>
```
Then add the CSS class in `styles.css`:
```css
.skills__customname {
    width: XX%;
}
```

### Add More Expertise Areas
Duplicate an expertise card in `index.html` and update the content. The modal will work automatically.

### Add More Courses
Add new course cards in the Courses section following the existing pattern.

## Credits

- Original Design: [Guglielmo Cerri](https://guglielmocerri.github.io/)
- Implementation: Customized for Saadi Safdar
- Icons: [Unicons](https://unicons.iconscout.com/) & [Font Awesome](https://fontawesome.com/)
- Slider: [Swiper](https://swiperjs.com/)

## License

This portfolio is for personal use. The design inspiration comes from Guglielmo Cerri's open-source portfolio.
