// All section start
const Alldata = (id) =>
{
    // const getdata = document.getElementById('output').innerText = id;
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => getAllData(data))
    .catch(error => console.error('Error fetching data:', error));

}

const getAllData=(data)=>
{
    const allDataValue = document.getElementById("all_data_container");
    allDataValue.innerHTML="";

    const noDataSection = document.getElementById("No_Data_Section");
    noDataSection.innerHTML = "";

    if (data.data.length === 0)
     {
        // Display image and text when there is no data

        const noDataContainer = document.createElement("div");
        noDataContainer.innerHTML = `

            <div class="flex-wrap text-center mt-3 align-items-center justify-content-around">
                <img src="./Icon.png" alt="No Data Image" style="width: 150px; height: 150px;">
                <h1><strong>Oops! Sorry,There is No <br> Content Here</strong></h1>
            </div>

        `;

        noDataSection.appendChild(noDataContainer);
    }
    else
    {
        // Display regular 
        
        (data.data).forEach(element => {
            console.log(element)

            const card = document.createElement("div");
            if (element.authors[0].verified)
            {
                card.innerHTML = `
                
                    <div class="card m-3" style="width: 18rem;">
                        <img src="${element.thumbnail}" class="card-img-top" alt="..." style="height: 200px">
                        <div class="card-body row" style="height: 150px">
                            <img class="col-md-5 rounded-circle" src="${element.authors[0].profile_picture}" alt="" style="width: 60px; height: 40px;">
                            <div class="col-md-7 text-start">
                                <p class="text"><strong>${element.title}</strong></p>
                                <div class="d-flex align-self-center">
                                    <p class="" style="margin-right: 4px">${element.authors[0].profile_name}</p>
                                    <spam>
                                    <img class="" src="./varified.png" alt="" style="width: 15px; height: 15px";>    
                                    </spam>
                                </div>
                                <p class="">${element.others.views} views</p>
                            </div>
                        </div>
                    </div>

                `;
            }
            else
            {
                card.innerHTML = `
                
                <div class="card m-3" style="width: 18rem;">
                <img src="${element.thumbnail}" class="card-img-top" alt="..." style="height: 200px">
                <div class="card-body row" style="height: 150px">
                    <img class="col-md-5 rounded-circle" src="${element.authors[0].profile_picture}" alt="" style="width: 60px; height: 40px;">
                    <div class="col-md-7 text-start">
                        <p class="text"><strong>${element.title}</strong></p>
                        <div class="d-flex align-self-center">
                            <p class="" style="margin-right: 4px">${element.authors[0].profile_name}</p>
                        </div>
                        <p class="">${element.others.views} views</p>
                    </div>
                </div>
            </div>

                `;
            }
            

            allDataValue.appendChild(card)
        });
    }
}

// All section ended

// --------------------------------------------------

// sort by view

const sort_video = () =>
{
    fetch("https://openapi.programming-hero.com/api/videos/category/1000").
    then(response=> response.json()).
    then(data => sortData(data));
}

const sortData = (data) =>
{
    const sortedData = data.data.sort((a,b)=>{
        let b1 = parseFloat(b.others.views)
        let a1 = parseFloat(a.others.views)
        console.log(b.others.views)
        console.log(a.others.views)
       return b1 - a1
      })
    

    const allDataValue = document.getElementById("all_data_container");
    allDataValue.innerHTML="";

    sortedData.forEach(element => {
        console.log(element)

        const card = document.createElement("div");
        if (element.authors[0].verified)
            {
                card.innerHTML = `
                
                    <div class="card m-3" style="width: 18rem;">
                        <img src="${element.thumbnail}" class="card-img-top" alt="..." style="height: 200px">
                        <div class="card-body row" style="height: 150px">
                            <img class="col-md-5 rounded-circle" src="${element.authors[0].profile_picture}" alt="" style="width: 60px; height: 40px;">
                            <div class="col-md-7 text-start">
                                <p class="text"><strong>${element.title}</strong></p>
                                <div class="d-flex align-self-center">
                                    <p class="" style="margin-right: 4px">${element.authors[0].profile_name}</p>
                                    <spam>
                                    <img class="" src="./PHero-Tube-main/verified.png" alt="" style="width: 15px; height: 15px";>    
                                    </spam>
                                </div>
                                <p class="">${element.others.views} views</p>
                            </div>
                        </div>
                    </div>

                `;
            }
            else
            {
                card.innerHTML = `
                
                <div class="card m-3" style="width: 18rem;">
                <img src="${element.thumbnail}" class="card-img-top" alt="..." style="height: 200px">
                <div class="card-body row" style="height: 150px">
                    <img class="col-md-5 rounded-circle" src="${element.authors[0].profile_picture}" alt="" style="width: 60px; height: 40px;">
                    <div class="col-md-7 text-start">
                        <p class="text"><strong>${element.title}</strong></p>
                        <div class="d-flex align-self-center">
                            <p class="" style="margin-right: 4px">${element.authors[0].profile_name}</p>
                        </div>
                        <p class="">${element.others.views} views</p>
                    </div>
                </div>
            </div>

                `;
            }
        

        allDataValue.appendChild(card)
    });
}

Alldata('1000');