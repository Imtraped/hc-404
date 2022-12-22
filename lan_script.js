function openCard() {
    document.querySelector('.front').classList.add('rotate-front');
    document.querySelector('.back').classList.add('rotate-back');
    document.querySelector('.page').classList.add('rotate-page');

    var txtLanguage = document.querySelector('#language');
    var youPicked = document.querySelector('#lan');
    var iGreet = document.querySelector('#greeting');
    var thisLanguage = document.querySelector('#custom-lan');
    youPicked.innerHTML = `This is in ${txtLanguage.value},`;

    var languageName = txtLanguage.value.toLowerCase();
    if (languageName == "english") {
      iGreet.innerHTML = "Dear Mother,</h5>";
      thisLanguage.innerHTML = "This time of year can be stressful, but I'm for you. I wish you the best at your job and in the new year."
    }
    else if (languageName == "frisian") {
      iGreet.innerHTML = "Beste mem,</h5>";
      thisLanguage.innerHTML = "Dizze tiid fan it jier kin stress wêze, mar ik bin foar jo. Ik winskje jo it bêste yn jo wurk en yn it nije jier.";
    }
    else if (languageName == "dhivehi") {
      iGreet.innerHTML = "ލޮބުވެތި މަންމަ،</h5>";
      thisLanguage.innerHTML = "އަހަރުގެ މި ދުވަސްވަރަކީ ސްޓްރެސް ބޮޑު ދުވަސްވަރަކަށް ވެދާނެ ނަމަވެސް އަހަރެން މިހުރީ ކަލެއަށްޓަކައެވެ. ވަޒީފާގައިވެސް އަދި އާ އަހަރުގައިވެސް ހެޔޮއެދުންތައް އެދެމެވެ.";
    }
    else if (languageName == "spanish") {
      iGreet.innerHTML = "Querida Madre,</h5>";
      thisLanguage.innerHTML = "Esta época del año puede ser estresante, pero estoy para ti. Te deseo lo mejor en tu trabajo y en el nuevo año.";
    }
    else if (languageName == "icelandic") {
      iGreet.innerHTML = "Elsku mamma,</h5>";
      thisLanguage.innerHTML = "Þessi árstími getur verið stressandi, en ég er fyrir þig. Ég óska þér alls hins besta í starfi þínu og á nýju ári.";
    }
    else if (languageName == "nepali") {
      iGreet.innerHTML = "प्रिय आमा,</h5>";
      thisLanguage.innerHTML = "वर्षको यो समय तनावपूर्ण हुन सक्छ, तर म यहाँ तपाईंको लागि छु। नयाँ बर्ष २०७७ को उपलक्ष्यमा तपाईको काममा सफलताको शुभकामना व्यक्त गर्दछु ।";
    }
    else if (languageName == "xhosa") {
      iGreet.innerHTML = "Mama othandekayo,</h5>";
      thisLanguage.innerHTML = "Eli xesha lonyaka linokuba noxinzelelo, kodwa ndikulungele. Ndikunqwenelela impumelelo emsebenzini wakho nakunyaka omtsha.";
    }
    else {
      iGreet.innerHTML = "That Language Is Not available"
      thisLanguage.innerHTML = "Try Again"
    }
}