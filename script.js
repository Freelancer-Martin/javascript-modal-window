
const model = document.querySelector('.modal');
const btnOpenModel = document.querySelectorAll('.show-modal');
const btnCloseModel = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModel = function()
{
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');

}

const closeModel = function()
{
    model.classList.add('hidden');
    overlay.classList.add('hidden');
    //console.log('test');
}

for ( let i = 0; i < btnOpenModel.length; i++)
{
    btnOpenModel[i].addEventListener('click', openModel)
    console.log(btnOpenModel[i]);
}

btnCloseModel.addEventListener('click', closeModel)
overlay.addEventListener('click', closeModel)

//console.log(model);

document.addEventListener('keydown', function (e) {
    // console.log(e.key);

    if (e.key === 'Escape' && !model.classList.contains('hidden')) {
        closeModel();
    }
});