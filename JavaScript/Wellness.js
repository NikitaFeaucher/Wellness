//Комментарии в JavaScript по синтаксису не отличаются от языков программирования: Pascal, C++, C#, C и т.д.
function CaloriesCounting()
{
    console.log("Подсчет калорий..");
    const Gender = document.getElementById('Male');
    let GenderValue;
    if (Gender.checked == true) GenderValue = "Male";
    else GenderValue = "Female";
    const Weight = document.getElementById('Weight').value;
    const Growth = document.getElementById('Growth').value;
    const Age = document.getElementById('Age').value;
    let ActivityLevel;//Уровень физической активности
    const WeakActivity = document.getElementById('WeakActivity');
    if (WeakActivity.checked == true) ActivityLevel = 1,2;
    const MediumActivity = document.getElementById('MediumActivity');
    if (MediumActivity.checked == true) ActivityLevel = 1,375;
    const NormalActivity = document.getElementById('NormalActivity');
    if (NormalActivity.checked == true) ActivityLevel = 1,55;
    const HighActivity = document.getElementById('HighActivity');
    if (HighActivity.checked == true) ActivityLevel = 1,725;
    const ExtraActivity = document.getElementById('ExtraActivity');
    if (ExtraActivity.checked == true) ActivityLevel = 1,9;
    let Result;//Результат
    //(10*вес(кг) + 6.25*рост(см) – 5*возраст(год) + 5) * A.
    if (GenderValue == "Male")
    {
        Result = (10*Weight + 6.25*Growth - 5*Age + 5) * ActivityLevel;
    }
    //(10*вес(кг) + 6.25*рост(см) – 5*возраст(год) – 161) * A.
    else
    {
        Result = (10*Weight + 6.25*Growth - 5*Age - 161) * ActivityLevel;
    }
    document.getElementById('Result').innerHTML = Result;//Показываем полученный результат
}