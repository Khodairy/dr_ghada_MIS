// Practical Exam Of Data Mining
// Dr.Ghada  ( MIS )


let input = document.querySelector("input");
let button = document.querySelector("button");
let output = document.querySelector(".output")
let sentiment = document.querySelector(".output-sentiment")

let stop_words = ["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into",
"is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these",
"they", "this", "to", "was", "will", "with"];


array_positive =  [
    "Smile", "Laugh", "Happy", "Joyful", "Delighted",
    "Content", "Pleased", "Grateful", "Cheerful", "Merry",
    "Elated", "Ecstatic", "Blissful", "Radiant", "Jubilant",
    "Exuberant", "Upbeat", "Satisfied", "Euphoric", "Thrilled",
    "Gleeful", "Overjoyed", "Sunny", "Lighthearted", "Buoyant",
    "Carefree", "Optimistic", "Vibrant", "Exhilarated", "Amused",
    "Ecstasy", "Glad", "Triumphant", "Blessed", "Spirited",
    "Festive", "Bubbly", "Zestful", "Jovial", "Rejoicing",
    "Wholesome", "Playful", "Radiating", "Savoring", "Heartfelt",
    "Cheering", "Uplifting", "Buoyancy", "Exultant", "Jocund",
    "Blithesome", "Gay", "Upward", "Grinning", "Mirthful",
    "Chirpy", "Giggly", "Chuckling", "Hilarious", "Convivial",
    "Camaraderie", "Reveling", "Delirious", "Enjoying", "Rapturous",
    "Jolly", "Buoying", "Pleasurably", "Sparkling", "Energetic",
    "Thankful", "Appreciative", "Serene", "Comfortable", "Secure",
    "Affectionate", "Fulfilled", "Enthusiastic", "Satisfying",
    "Savoring", "Radiating", "Serenity", "Affection", "Harmonious",
    "Sincere", "Genuine", "Warmth", "Hopeful", "Wonderful",
    "Cuddly", "Fascinated", "Tender"
]

array_negative =  [
    "Frown", "Cry", "Unhappy", "Sorrowful", "Displeased",
    "Discontent", "Ungrateful", "Mournful", "Gloomy", "Depressed",
    "Dismal", "Miserable", "Grim", "Dejected", "Downbeat",
    "Pessimistic", "Melancholy", "Upset", "Despair", "Dreary",
    "Regretful", "Agony", "Anguish", "Desperation", "Lament",
    "Heartache", "Woe", "Hopelessness", "Desolate", "Forlorn",
    "Downcast", "Sad", "Tearful", "Sulky", "Blue",
    "Somber", "Cheerlessness", "Pain", "Torment", "Discomfort",
    "Restlessness", "Unfulfilled", "Dissatisfied", "Grouchy", "Irritated",
    "Angry", "Disgruntled", "Frustration", "Discontented", "Unpleasant",
    "Annoyance", "Moody", "Apathy", "Loneliness", "Isolation",
    "Abandonment", "Detached", "Alienation", "Distress", "Oppression",
    "Hurt", "Disheartened", "Defeat", "Humdrum", "Flat",
    "Boredom", "Monotony", "Drab", "Tiresome", "Stagnant",
    "Stale", "Tedious", "Uninteresting", "Stiff", "Rigid",
    "Stress", "Tension", "Anxiety", "Nervousness", "Worry",
    "Fear", "Restless", "Turbulent", "Disquiet", "Disconsolate",
    "Oppressive", "Uncomfortable", "Suffering", "Hardship", "Burden"
]

var array_of_output = "";

button.onclick = function() {
    let result_of_output = input.value;

    // apply lowercase
    let result_after_lowercase = result_of_output.split(" ").map(function(e){
        return e.toLowerCase();
    }).join(" ")

    array_of_output = result_after_lowercase.split(" ");

    // remove URL
    for(i=0; i<array_of_output.length; i++) {
        let regUrl = /(https?)?:?(\/\/)?(www.)?\w+\.\w+:?.+/ig.test(array_of_output[i]);

        if(regUrl === true) {
            array_of_output[i] = "";
        }else {
            array_of_output[i] = array_of_output[i];
        }

        // remove special characters
        let chars = Array.from(array_of_output[i])
        for (j=0; j<chars.length; j++) {
            reg_special_char = /\w/ig.test(chars[j]);
            if (reg_special_char === true) {
                chars[j] = chars[j];
            }else {
                chars[j] = "";
            }
            
        }
        array_of_output[i] = chars.join("");

        // remove stop words
        for(k=0; k<stop_words.length; k++) {
            if (stop_words[k] !== array_of_output[i]) {
                array_of_output[i] = array_of_output[i];
            }else {
                array_of_output[i] = "";
            }
        }

        for(p=0; p<array_positive.length; p++) {
            if (array_of_output[i] === array_positive[p].toLowerCase()) {
                sentiment.textContent = "Positive sentiment";
            }
        }

        for(n=0; n<array_negative.length; n++) {
            if (array_of_output[i] === array_negative[n].toLowerCase()) {
                sentiment.textContent = "Negative sentiment";
            }
        }
    }

    // remove white spaces
    array_of_output = array_of_output.filter(Boolean).join(" ");

    console.log(array_of_output);
    if(output.textContent === "") {
        output.textContent = array_of_output;
    }else {
        output.textContent = array_of_output;
    }
};



