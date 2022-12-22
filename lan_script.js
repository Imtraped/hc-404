function openCard() {
    document.querySelector('.front').classList.add('rotate-front');
    document.querySelector('.back').classList.add('rotate-back');
    document.querySelector('.page').classList.add('rotate-page');

    var txtLanguage = document.querySelector('#language');
    var youPicked = document.querySelector('#lan');
    var iGreet = document.querySelector('#greeting');
    var thisLanguage = document.querySelector('#custom-lan');
    var flag = document.querySelector('#flag');
    youPicked.innerHTML = `This is in ${txtLanguage.value},`;

    var languageName = txtLanguage.value.toLowerCase();
    if (languageName == "chinese") {
      iGreet.innerHTML = "亲爱的妈妈，</h5>";
      thisLanguage.innerHTML = "每年的这个时候可能会有压力，但我支持你。 祝您在新的一年里工作顺利。"
    }
    else if (languageName == "spanish") {
      iGreet.innerHTML = "Querida Madre,</h5>";
      thisLanguage.innerHTML = "Esta época del año puede ser estresante, pero estoy para ti. Te deseo lo mejor en tu trabajo y en el nuevo año.";
    }
    else if (languageName == "english") {
      iGreet.innerHTML = "Dear Mother,</h5>";
      thisLanguage.innerHTML = "This time of year can be stressful, but I'm for you. I wish you the best at your job and in the new year.";
    }
    else if (languageName == "hindi") {
      iGreet.innerHTML = "</h5>";
      thisLanguage.innerHTML = "";
    }
    else if (languageName == "bengali") {
      iGreet.innerHTML = ",</h5>";
      thisLanguage.innerHTML = "Þessi árstími getur verið stressandi, en ég er fyrir þig. Ég óska þér alls hins besta í starfi þínu og á nýju ári.";
    }
    else if (languageName == "portuguese") {
      iGreet.innerHTML = ",</h5>";
      thisLanguage.innerHTML = "Esta época do ano pode ser estressante, mas eu sou para você. Desejo-lhe o melhor em seu trabalho e no ano novo.";
    }
    else if (languageName == "russian") {
      iGreet.innerHTML = ",</h5>";
      thisLanguage.innerHTML = "Это время года может быть напряженным, но я за тебя. Желаю вам успехов на работе и в новом году.";
    }
    else if (languageName == "japanese") {
        iGreet.innerHTML = ",</h5>";
        thisLanguage.innerHTML = "この時期はストレスがたまるかもしれませんが、私はあなたのためにいます。 新年のご多幸とご多幸をお祈り申し上げます。";
      }
    else if (languageName == "vietnamese") {
        iGreet.innerHTML = ",</h5>";
        thisLanguage.innerHTML = "Thời gian này trong năm có thể căng thẳng, nhưng tôi dành cho bạn. Tôi chúc bạn những điều tốt đẹp nhất trong công việc của bạn và trong năm mới.";
      }
    else if (languageName == "mizo") {
        iGreet.innerHTML = "Nu duh tak, .</h5>";
        thisLanguage.innerHTML = "Kumin chhunga he hun hi a buaithlak thei a, mahse nangmah tan ka ni. I hnathawhna kawngah leh kum thar atan duhsakna ka hlan a che.";
      }
      
    else {
      iGreet.innerHTML = "That Language Is Not Available"
      thisLanguage.innerHTML = "Try Again"
    }
}