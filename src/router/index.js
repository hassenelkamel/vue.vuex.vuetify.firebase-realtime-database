import firebase from 'firebase/app';
import Router from 'vue-router';
import Vue from 'vue';
import ClientContainer from '@/components/ClientContainer';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';
//import {store} from '@/store/store'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/PrimaryKinshipCaregiver/:primaryKinshipCaregiverId',
      props: true,
      name: 'PrimaryKinshipCaregiver',
      component: ClientContainer,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/PrimaryKinshipCaregiver/:primaryKinshipCaregiverId/PrimaryKinshipCaregiverIncome/:primaryKinshipCaregiverIncomeId',
      props: true,
      name: 'PrimaryKinshipCaregiverIncome',
      component: ClientContainer,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/PrimaryKinshipCaregiver/:primaryKinshipCaregiverId/PrimaryKinshipCaregiverContact/:primaryKinshipCaregiverContactId',
      props: true,
      name: 'PrimaryKinshipCaregiverContact',
      component: ClientContainer,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/PrimaryKinshipCaregiver/:primaryKinshipCaregiverId/FamilyAdvocacyCasePlan/:familyAdvocacyCasePlanId',
      props: true,
      name: 'FamilyAdvocacyCasePlan',
      component: ClientContainer,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/PrimaryKinshipCaregiver/:primaryKinshipCaregiverId/FamilyAdvocacyCasePlan/:familyAdvocacyCasePlanId/FamilyAdvocacyGuardianship/:familyAdvocacyGuardianshipId',
      props: true,
      name: 'FamilyAdvocacyGuardianship',
      component: ClientContainer,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/PrimaryKinshipCaregiver/:primaryKinshipCaregiverId/KinshipChild/:kinshipChildId',
      props: true,
      name: 'KinshipChild',
      component: ClientContainer,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/PrimaryKinshipCaregiver/:primaryKinshipCaregiverId/KinshipChild/:kinshipChildId/KinshipChildIncome/:kinshipChildIncomeId',
      props: true,
      name: 'KinshipChildIncome',
      component: ClientContainer,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/PrimaryKinshipCaregiver/:primaryKinshipCaregiverId/KinshipChild/:kinshipChildId/KinshipChildCustodyStatus/:kinshipChildCustodyStatusId',
      props: true,
      name: 'KinshipChildCustodyStatus',
      component: ClientContainer,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/PrimaryKinshipCaregiver/:primaryKinshipCaregiverId/OtherInHousehold/:otherInHouseholdId',
      props: true,
      name: 'OtherInHousehold',
      component: ClientContainer,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/PrimaryKinshipCaregiver/:primaryKinshipCaregiverId/OtherInHousehold/:otherInHouseholdId/OtherInHouseholdIncome/:otherInHouseholdIncomeId',
      props: true,
      name: 'OtherInHouseholdIncome',
      component: ClientContainer,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
  ],
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
   console.log('router.beforeEach');
  // console.log('to:');
  // console.log(to);
  // console.log(store.state.currentEntity);
  // console.log('from:');
  // console.log(from);

  if (requiresAuth && !currentUser){
    next('/login');
  }
  else if(currentUser && to.matched.some(record=>record.path == "/login")){
    next('/dashboard');
  } 
  else {
    next();
  }
});

export default router;
