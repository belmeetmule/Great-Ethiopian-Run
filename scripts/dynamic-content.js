// js file
const projects = [
  {
    id: '1',
    programIcon: './assets/icons/program_icon_01.png',
    programName: 'Press briefing',
    description:
      'A daily selection of privately personalized reads; description1',
  },
  {
    id: '2',
    programIcon: './assets/icons/program_icon_02.png',
    programName: 'Preparation',
    description:
      'Two - A daily selection of privately personalized reads; description1',
  },
  {
    id: '3',
    programIcon: './assets/icons/program_icon_03.png',
    programName: 'Running',
    description:
      'Three- A daily selection of privately personalized reads; description1',
  },
  {
    id: '4',
    programIcon: './assets/icons/program_icon_04.png',
    programName: 'Medal ceremony',
    description:
      'Four - A daily selection of privately personalized reads; description1',
  }
];

const frame= 'assets/images/chess.jpg';
// js file
const athletes = [
  {
    atheletPic: 'assets/images/ger-fa-haile.jpg',
    athletName: 'Haile G/Sillase',
    athletProfile:'Long distance runner',
    athletAchivements: 
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, suscipit dolor odio culpa reiciendis, tempora facilis labore, aperiam adipisci dolores dolore autem consequuntur possimus. Modi ipsa dolorem quia ipsum laborum.'
  },
  {
    atheletPic: 'assets/images/ger-fa-tirunesh.jpg',
    athletName: 'Tirunesh Dibaba',
    athletProfile:'Long distance runner',
    athletAchivements: 
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, suscipit dolor odio culpa reiciendis, tempora facilis labore, aperiam adipisci dolores dolore autem consequuntur possimus. Modi ipsa dolorem quia ipsum laborum.'
  },
  {
    atheletPic: 'assets/images/ger-fa-kenenisa.jpg',
    athletName: 'Kenenisa Bekele',
    athletProfile:'Long distance runner',
    athletAchivements: 
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, suscipit dolor odio culpa reiciendis, tempora facilis labore, aperiam adipisci dolores dolore autem consequuntur possimus. Modi ipsa dolorem quia ipsum laborum.'
  },
  {
    atheletPic: 'assets/images/ger-fa-meseret.jpg',
    athletName: 'Meseret Defar',
    athletProfile:'Long distance runner',
    athletAchivements: 
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, suscipit dolor odio culpa reiciendis, tempora facilis labore, aperiam adipisci dolores dolore autem consequuntur possimus. Modi ipsa dolorem quia ipsum laborum.'
  },
  {
    atheletPic: 'assets/images/ger-fa-sileshi.jpg',
    athletName: 'Sileshi Sihin',
    athletProfile:'Long distance runner',
    athletAchivements: 
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, suscipit dolor odio culpa reiciendis, tempora facilis labore, aperiam adipisci dolores dolore autem consequuntur possimus. Modi ipsa dolorem quia ipsum laborum.'
  },
  {
    atheletPic: 'assets/images/ger-fa-genzebe.jpg',
    athletName: 'Genezebe Dibaba',
    athletProfile:'Long distance runner',
    athletAchivements: 
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, suscipit dolor odio culpa reiciendis, tempora facilis labore, aperiam adipisci dolores dolore autem consequuntur possimus. Modi ipsa dolorem quia ipsum laborum.'
  }
];

function addProgram(pro) {
  const programs = document.querySelector('#programs');
  
  /* program div */
  const program = document.createElement('div');
  program.id = pro.id;
  program.classList.add('program');

  /* Program type div */
  const programType = document.createElement('div');
  programType.classList.add('program-type');

  const programIcon = document.createElement('div');
  programIcon.classList.add('program-icon');

  // the program icon
  const programIcons = document.createElement('img');
  programIcons.src = pro.programIcon;
  programIcons.alt = `${pro.id} id`;
  programIcons.classList.add('pro-icons');

 //append the icons to the div 
  programIcon.appendChild(programIcons);

// create another div for the program title
  const programTitle = document.createElement('div');
  programTitle.classList.add('program-title');
  //content from the array
  programTitle.innerHTML=pro.programName

  // program type has got 2 child
  programType.appendChild(programIcon);
  programType.appendChild(programTitle);

  // create another div for the description part
  const programDescription = document.createElement('div');
  programDescription.classList.add('program-description');
  //actual text from the array
  programDescription.innerHTML= pro.description;

  //attach program description and program-type divs to the program div
  program.appendChild(programType);
  program.appendChild(programDescription);
  
  programs.appendChild(program);
}

function addAthlet(pro, i) {
  const athletes = document.querySelector('#athletes');

    /* athelet*/
    const participant = document.createElement('div');
    participant.classList.add('athelet');

  /* profile pic */
  const profilePic = document.createElement('div');
  profilePic.classList.add('profile-pic');

  // the photo frame
  const photoFrame = document.createElement('img');
  photoFrame.src = frame;
  photoFrame.alt = `photo frame`;
  photoFrame.classList.add('photo-frame');

  // the photo
  const atheletPhoto = document.createElement('img');
  atheletPhoto.src = pro.atheletPic;
  atheletPhoto.alt = `athlete's prhoto`;
  atheletPhoto.classList.add('runner-img');

 //append the frame and photo to the profile pic 
 profilePic.appendChild(photoFrame);
 profilePic.appendChild(atheletPhoto);

// create another div for the ahtlet-info
  const athletInfo = document.createElement('div');
  athletInfo.classList.add('athlet-info');

  // create h2 
  const antletName = document.createElement('h2');
  antletName.classList.add('athelet-name');
  //actual text from the array
  antletName.innerHTML= pro.athletName;

    // create p
    const profile = document.createElement('p');
    profile.classList.add('profile');

    const nameEmp = document.createElement('em');
    nameEmp.innerHTML= pro.athletProfile;

    profile.appendChild(nameEmp);
    // create another div for the ahtlet-info
    const hrBar = document.createElement('div');
    hrBar.classList.add('line-2');

      // create p
      const acheivements = document.createElement('p');
      acheivements.classList.add('acheivemnts');
      //actual text from the array
      acheivements.innerHTML= pro.athletAchivements;

  //attach program description and program-type divs to the program div
  athletInfo.appendChild(antletName);
  athletInfo.appendChild(profile);
  athletInfo.appendChild(hrBar);
  athletInfo.appendChild(acheivements);
  
  participant.appendChild(profilePic);
  participant.appendChild(athletInfo);
  athletes.appendChild(participant);
}

function addProgramSection() {
  for (let i = 0; i < projects.length; i = i+ 1) {
    addProgram(projects[i]);
  }
}

function addParticipant() {
  for (let i = 0; i < athletes.length; i = i+ 1) {
    addAthlet(athletes[i], i);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  addProgramSection();
  addParticipant();
}, false);
