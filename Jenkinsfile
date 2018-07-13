pipeline {
  agent {
    docker {
      image '3c5a05123222'
    }
    
  }
  stages {
    stage('install') {
      steps {
        sh 'npm i '
      }
    }
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('restart') {
      steps {
        sh 'nginx restart'
      }
    }
  }
}