

var UIController =( function () {

     var DomStrings = {

        inputType: "add__type",
        inputDescription: "add_description",
        inputValue: "add__value",
        inputBtn: ".add__btn",
        incomeControl: "income__list",
        expenseControl: "expenses__list"
     }

 

 return {

            addListitems :function(obj,type) {

                var html,newhtml,element;
            
            if (type === 'inc'){
            
                element = DomStrings.incomeControl;
                html= '<div class="item clearfix" id="income-%id%"><div class="item__description">%des%</div><div class="right clearfix"><div class="item__value-%val%">%val%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            
            }else if(type === 'exp')
                
                element = DomStrings.expenseControl;
                html= '<div class="item clearfix" id="expense-%id%"><div class="item__description">%des%</div><div class="right clearfix"><div class="item__value">%val%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            
                    newhtml =html.replace("%id%",obj.id);
                    newhtml = html.replace("%des%",obj.description);
                    newhtml = html.replace("%val%",obj.value);
            
                document.querySelector(element).insertAdjacentHTML('beforend',newhtml);
            },


            getInput: function () {

            var inputParams=
            { 
            Type: document.querySelector(DomStrings.inputType).value,
            Description: document.querySelector(DomStrings.inputDescription).value,
            Value: document.querySelector(DomStrings.inputValue).value
            };
            
            return inputParams;
    },

            getdomStrings: function(){

                return DomStrings;

            }
     };
 



})();

var budgetController =(function(){

    var Expense = function (id,description,value) {

        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income =function(id,description,value) {

        this.id = id;
        this.description = description;
        this.value = value;
    }
    var data =
    {
        allitems: { 
                exp: [] ,
                inc: []
            },

        totals: {
            exp:0 ,
            inc:0
        }
    }
    
  

    var addObj =
       
     {  addItem : function (type,des,val) {
        
        var newItem, Id=0;

        if(type==="ex")
        { newItem = new Expense(ID,des,val);}

        else if(type==="inc")

        {newItem = new Income(ID,des,val);}

        data.allitems[type].push(newItem);

        return newItem;
    }
};

    return addObj;
     
})();

var controller =(function(bugctrl,ctrlUI){

    var setupEvents = function(){

        var Dom = ctrlUI.getdomStrings;

        document.querySelector(Dom.inputBtn).addEventListener("click",ctrlAddItem);

        document.addEventListener("keypress", function name(event) {
            if (event.keyCode===13 || event.which===13)
            {
                ctrlAddItem();
            }


        });

    }

    var ctrlAddItem = 
        function() {
            
            var input = ctrlUI.getInput();

            var newItem = bugctrl.addObj.addItem(input.Type,input.Description,input.Value);

            var newItem = ctrlUI.addListitems(newItem, input.Type);
        }
 


        return {

            init: function(){
                console.log("Application has started");
                setupEvents();
            }
        }
    
})(budgetController,UIcontroller);