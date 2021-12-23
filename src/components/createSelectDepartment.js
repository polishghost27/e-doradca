import {MDCSelect} from '@material/select';



const createSelectDepartment = () =>{

    const selectDepartment = new MDCSelect(document.getElementById('selectDepartment'));
    
    selectDepartment.listen('MDCSelect:change', () => {
        console.log(`Selected option at index ${selectDepartment.selectedIndex} with value "${selectDepartment.value}"`);
    });

}


export default createSelectDepartment