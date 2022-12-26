import React, { useState } from 'react';

const HomeContext = React.createContext({
	survey:{},
	family:{},
	notification:[],
	currFamilyMemberId:0,
	getAllFamilyMembers: (obj) => {},
	getSurveyByMember: (obj) => {},
	saveSurvey: (obj) => {},
	finishSurvey: (obj) => {},
	updateMemberStatus: (family_id) => {},
	setNotifications: (notifications) => {},
	clearContext: () => {},
});
export default HomeContext;

export const HomeContextProvider = (props) => {

	const [familyDataState, setFamilyDataState] = useState({family:{},currFamilyMemberId:0, survey:{}, notification:[]});
	
	const home = {
		 	family:familyDataState.family,
		 	currFamilyMemberId:familyDataState.currFamilyMemberId,
		 	survey:familyDataState.survey,
		 	notification:familyDataState.notification,

	    getAllFamilyMembers: (obj,notification) => {
	      setFamilyDataState(prevState => {
	      	return {...prevState, family: obj}
	      });
	      // setFamilyDataState({family:obj, notification})
	    },
	    getSurveyByMember: (obj, currFamilyMemberId) => {
	 			// obj[0].choices.push({"id": 786,
        // "choice_text": "span 1",
        // "choice_image": null,
        // "category": "Destinations: Bermuda"},{"id": 900,
        // "choice_text": "spa 2",
        // "choice_image": null,
        // "category": "Destinations: Bermuda"},{"id": 9400,
        // "choice_text": "spa 3",
        // "choice_image": null,
        // "category": "Destinations: Bermuda"},{
        // 	"id": 232,
        // "choice_text": "span 4",
        // "choice_image": null,
        // "category": "Destinations: Bermuda"
        // })
	    	setFamilyDataState(prevState => {
	      	return {family:{...prevState.family}, survey: obj,currFamilyMemberId:currFamilyMemberId, notification:[]}
	      });
	    },
	    saveSurvey: (obj) => {
	    	let sur = familyDataState.survey
	    	let objIndex = sur.findIndex((objArr => objArr.id == obj.question_id));
	    	sur[objIndex].choices.map(function(sur_ch,i){
	    		// if(obj.choice_ids.includes(sur_ch.id.toString())) {
	    		// 	sur_ch.answer = true
	    		// }
	    		for (const key in obj.choice_ids) {
					  if (obj.choice_ids.hasOwnProperty(key)) {
					    if(sur_ch.id.toString() == obj.choice_ids[key])
	    					sur_ch.answer = true  
					  }
					}
	    		return sur_ch
	    	})
	    	
	    	setFamilyDataState(prevState => {
	      	return {family:{...prevState.family}, currFamilyMemberId: prevState.currFamilyMemberId, survey: sur, notification: []}
	      });
	    },

	    finishSurvey: (obj) => {	    	
	    	setFamilyDataState(prevState => {
	      	return {family:{...prevState.family}, survey: {}, currFamilyMemberId:0, notification: []}
	      });
	    },

	    updateMemberStatus: (family_id) => {  
	    	let fam = familyDataState.family
	    	let objIndex = fam.findIndex((objArr => objArr.id == family_id));
	    	fam[objIndex].is_active = !(fam[objIndex].is_active)
	    	setFamilyDataState(prevState => {
	      	return {survey:{...prevState.survey}, family: fam, notification:[]}
	      });
	    },
	    setNotifications: (notifications) => {
	    	setFamilyDataState(prevState => {
	      	return {survey:{}, family:{...prevState.family}, currFamilyMemberId:0 ,notification: notifications}
	      });
	    },
	    clearContext: () => {
	    	setFamilyDataState({survey:{}, family:{}, currFamilyMemberId:0 ,notification: []});
	    }
   
	}

	return(
		<HomeContext.Provider value={home}>
			{props.children}
		</HomeContext.Provider>
	)
}