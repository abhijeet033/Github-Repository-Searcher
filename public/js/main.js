
$(document).ready(function(){
   $('#search').click(function(){
     $('#search').attr("disabled",true);
     var reqData={}
     reqData.name=$('#repoName').val()
     
      $.ajax({
        type:'POST',
        data:JSON.stringify(reqData),
        contentType:'application/json',
        url:'/search',
        success:function(res){
          $('#search').attr("disabled",false)
          $('#main_table').html('')
          if(res.errMessage==null){
          var table=$("<tbody>")
          var header_row=$(table[0].insertRow(-1))

          var name_cell=$("<th>")
          name_cell.html('Name')
          header_row.append(name_cell);

          var full_name_cell=$("<th>")
          full_name_cell.html('full_name')
          header_row.append(full_name_cell);

          var private_cell=$("<th>")
          private_cell.html('private')
          header_row.append(private_cell);

          var owner_login_cell=$("<th>")
          owner_login_cell.html('owner_login')
          header_row.append(owner_login_cell);

          var owner_name_cell=$("<th>")
          owner_name_cell.html('owner_name')
          header_row.append(owner_name_cell);

          var owner_followerCount_cell=$("<th>")
          owner_followerCount_cell.html('owner_followerCount')
          header_row.append(owner_followerCount_cell);

          var owner_followingCount_cell=$("<th>")
          owner_followingCount_cell.html('owner_followingCount')
          header_row.append(owner_followingCount_cell);

          var licenseName_cell=$("<th>")
          licenseName_cell.html('licenseName')
          header_row.append(licenseName_cell);

          var score_cell=$("<th>")
          score_cell.html('score')
          header_row.append(score_cell);

          var numberOfBranch_cell=$("<th>")
          numberOfBranch_cell.html('numberOfBranch')
          header_row.append(numberOfBranch_cell);

          res.forEach(element => {
            console.log(element.private)
            var private=element.private
            var data_row=$(table[0].insertRow(-1))

            var name_cell=$("<td>")
            name_cell.html(element.name)
            data_row.append(name_cell);
  
            var full_name_cell=$("<td>")
            full_name_cell.html(element.full_name)
            data_row.append(full_name_cell);
  
            var private_cell=$("<td>")
            private_cell.html(private)
            data_row.append(private_cell);
  
            var owner_login_cell=$("<td>")
            owner_login_cell.html(element.owner.login)
            data_row.append(owner_login_cell);
  
            var owner_name_cell=$("<td>")
            owner_name_cell.html(element.owner.name)
            data_row.append(owner_name_cell);
  
            var owner_followerCount_cell=$("<td>")
            owner_followerCount_cell.html(element.owner.followersCount)
            data_row.append(owner_followerCount_cell);
  
            var owner_followingCount_cell=$("<td>")
            owner_followingCount_cell.html(element.owner.followingCount)
            data_row.append(owner_followingCount_cell);
  
            var licenseName_cell=$("<td>")
            licenseName_cell.html(element.licenseName)
            data_row.append(licenseName_cell);
  
            var score_cell=$("<td>")
            score_cell.html(element.score)
            data_row.append(score_cell);
  
            var numberOfBranch_cell=$("<td>")
            numberOfBranch_cell.html(element.numberOfBranch)
            data_row.append(numberOfBranch_cell);
              
          });

          $('#main_table').append(table)
          }
          else{
            console.log(res.errMessage)
            alert('Enter Proper Search Field')
          }
        }
      })
   })
  
})