pipeline{
    agent none
    parameters{
        choice(name:'ENV', choices:['UAT','LIVE'], description:"Env to test")
        string(name:"BuildID",defaultValue:"build123")
    }

    stages{
        stage('Build Now'){
            agent any
            steps{
                echo "---executing the code in ${ENV}"
            }
        }
        stage('UAT Build'){
            agent any
            when{
                expression{
                    params.ENV == 'UAT'
                }
            }
            steps{
                echo "${ENV}"
                echo "${BuildID}"
            }
        }
    }
}