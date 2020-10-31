import React, { Component } from 'react';

export class GrammarCase extends Component {

  clickPaste = (e) => {  
	var input = document.getElementById('search-input');
	input.value = input.value + e.target.innerHTML; //or innerText without spaces.
  };

  render() {
  	const {
      clickPaste,
    } = this;
   
    return (
      <React.Fragment>
        <div className="caseTable">
        	Тийн ялгалын хүснэгт 
        	<span style={{ 'fontSize': 8 }} className='tooltip'>
        		<br/>
        		(нөхцөл дээр дарвал хайлтын хэсэгт нэмэгдэнэ.)
        	</span>
        	<table>
        		<thead>
          		<tr>
          			<th>Т.я-ын нэр</th> 
          				<th colSpan='3'>Харьяалах </th> 
          				<th colSpan='2'> Заах </th>
          				<th colSpan='2'>Өгөх орших</th>
          		</tr>
          		</thead>
          		<tbody>
          		<tr>
          			<td>Нөхцлүүд</td>   
          				<td onClick={clickPaste}> ᠊ᠢᠢᠨ </td> 
          				<td onClick={clickPaste}> ᠊ᠣᠨ </td>
          				<td onClick={clickPaste}> ᠊ᠣ </td> 
          				<td onClick={clickPaste}> ᠊ᠢᠢ </td>
          				<td onClick={clickPaste}> ᠊ᠢ </td>
          				<td onClick={clickPaste}> ᠊ᠳᠣᠷ </td>
          				<td onClick={clickPaste}> ᠲᠣᠷ </td>
          		</tr>
          		<tr> 
          			<td>Хаана хэрэглэх</td>  
          				<td>Эгшиг ба гийгүүлэгчээр төгссөн үгийн дараа </td> 
          				<td>'н'-ээс бусад гийгүүлэгчийн дараа </td>
          				<td> 'н' гийгүүлэгчийн дараа </td>
          				<td> (й)-гээс бусад гийгүүлэгчээр төгссөн үгэнд дагуулна.</td>
          				<td> эгшиг ба (й) гийгүүлэгчээр төгссөн үгэнд дагуулна. </td>
          				<td>Эгшиг болон зөөлөн (л, м, н, нг) дэвсгэрээр төгссөн үгэнд дагана. </td>
          				<td> Хатуу (б, г, р, с, д) дэвсгэрээр төгссөн үгэнд дагана. </td> 
          		</tr>
          		</tbody>
          	</table>

          	<table>
          		<thead>
          		<tr>
          			<th>Т.я-ын нэр</th> 
          				<th colSpan='1'> Гарах </th> 
          				<th colSpan='2'> Үйлдэх </th>
          				<th colSpan='3'> Хамтрах</th>
          		</tr>
          		</thead>
          		<tbody>
          		<tr>
          			<td>Нөхцлүүд</td>   
          				<td onClick={clickPaste}> ᠠᠴᠠ </td> 
          				<td onClick={clickPaste}> ᠪᠠᠷ </td>
          				<td onClick={clickPaste}> ᠊ᠢᠢᠠᠷ </td> 
          				<td onClick={clickPaste}> ᠲᠠᠢ </td>
          				<td onClick={clickPaste}> ᠯᠤᠭ ᠊ᠠ </td>
          				<td onClick={clickPaste}> ᠯᠤᠭᠡ </td>
          		</tr>
          		<tr> 
          			<td>Хаана хэрэглэх</td>  
          				<td> Ямар ч үгэнд дагуулна, уншихдаа эр эм үгийг харгалзана. </td> 
          				<td> Эгшиг ба "й" гийгүүлэгчээр төгссөн үгэнд дагуулна. </td>
          				<td> й-гээс бусад гийгүүлэгчээр төгссөн үгэнд дагуулна. </td>
          				<td> Ямар ч үгэнд дагуулна. </td>
          				<td colSpan='2'> Үгийн төгсгөлийг харгалзахгүйгээр, зөвхөн үгийн эр эмийг харгалзан эр үгэнд лугаа-г , эм үгэнд лүгээ-г бичнэ. </td>
          		</tr>
          		</tbody>
          	</table>	
        </div>
      </React.Fragment>
    );
  }
}

export default GrammarCase;
