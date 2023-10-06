const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
    logOut: "Log Out",
    apply: "Apply",
    confirm: "Confirm",
    clear: "Clear",
    refresh:'Refresh',
    rename:'Rename',
    connected:'Connected',
    saveChange:'Save changes',
    moreInfo:'More information',
    submit:'Submit',
    quit:'Quit'
  },
  welcomeScreen: {
    postscript: "psst  — ",
    readyForLaunch: "Your app, almost ready for launch!",
    exciting: "(ohh, this is exciting!)",
    letsGo: "Let's go!",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
    traceTitle: "Error from %{name} stack",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },

  errors: {
    invalidEmail: "Invalid email address.",
  },
  loginScreen: {
    signIn: "Sign In",
    emailFieldLabel: "Phone number",
    emailFieldPlaceholder: "000 000 00 00",
    tapToSignIn: "Sign In",
    voucherBtn: "Buy the voucher",
    hint: "Hint: you can use any mobile number :)",
    copyright: "By proceeding, you agree with our",
    privicy: "Privacy Policy",
    term: "Terms of Use",
    and: "and",
  },

  otpScreen: {
    signIn: "OTP confirmation",
    enterDetails: "Enter OTP code sent to your phone number",
    tapToSignIn: "Continue",
    resendOtpTitle: "Resend code in ",
    otpResendBtn: "Resend code",
    errors: {
      // invalidOTP: "Code is invalid {{error}}"
      invalidOTP: "Code is invalid",
    },
  },

  usernameScreen: {
    heading: "Write your username",
    fieldLabel: "Username",

    // enterDetails: "Enter OTP code sent to your phone number",
    tapToSignIn: "Confirm",
  },

  deviceScreen: {
    skip: "Skip",
    heading: "Connect device",
    details:
      "Device is necessary for counting steps and sleep score. You can connect the device now or at any other time in the settings",
    apple: "Apple Health",
    googleFit: "Google fit",
    fitbit: "Fitbit",
    whoop: "Whoop",
    btntext: "Continue",
    addNewDevice:'Add new device',
    renameDevice: 'Rename device',
    deviceName:'Device name',
    deleteDevice:'Delete device',
    requestTitle:'Request a new device',
    nameofDevice:'Name of the device',
    linkToDevice:'Link to the website',
    ESMTitle:'You do not have any devices added',
    ESMSubTitle:'With the device we will be able to count your steps and sleep score. ',
    deleteDetails:'Are you sure you want to remove the device? once removed, we will not be able to count your steps and sleep to achieve your goals'
  },
  Communitylevels:{
    pageTitle:'Community levels',
  },

  goalsScreen: {
    title: "Goals",
    goalAchieved:'Goal achieved!',
  },

  challengesScreen: {
    title: "Challenges",
    leaderboard: "Leaderboard",
    buttonTitle: "Participate",
    leaderboardDetail: "Follow the progress of others",
    createChallenge: "Create challenge",
    createChallengeDetail: "Compete with your friends",
    challengesEmptyHeading: "No results found",
    challengesEmptySubHeading: "We could not find a result for the applied filters",
    filters: {
      filterOne: "Units",
      filterOneSteps: "Steps",
      filterOneSleep: "Sleep score",
      filterTwo: "Interval",
      filterTwoDaily: "Daily",
      filterTwoWeekly: "Weekly",
      filterTwoMonthly: "Monthly",
      filterThree: "Sort by",
      filterThreeNewToOld: "New to old",
      filterThreeOldToNew: "Old to new",
      filterThreePopular: "Popular",
    },
    createNewChallalnge: {
      headerTitle: "New challenge creation",
      setGoalTitle: "Set challenge goal",
      nameChallengeTitle: "Name of the challenge",
      description: "Description",
      timePeriodTitle: "Select a time period",
      inviteParticipant: "Invite the participants",
      inviteFromApp: "Invite from app",
      userNotInApp: "The user is not in the app",
      buttonText: "Create challenge",
      setGoalButton: "Confirm"
    },
    timePeriod: {
      date: 'Date',
      timeFrom: 'Time from',
      timeTo: 'Time to',
      fullDay: 'Full day',
      dateHeading: "Set date for challenge",
      timeFromHeading: "Set time from",
      timeToHeading: "Set time to",
      datePickerBtnBack: "Back", 
      datePickerBtnConfirm: "Confirm", 
    },
    inviteFriends: {
      headerTitle: "Invite the participants",
      tab: {
        myfollowing: "My followings",
        all: "All"
      },
      button: "Invite to the challenge",
      search: "We could not find a result for the {{subTitleParms}}",
      searchButton: "Get the link to invite to the app",
      inviteForLinkHeading: "Invite user to the challenge",
      inviteForLinkDesc: "copy the link and send it to your friend to participate in private challenge"
    }
  },
  
  marketplaceScreen: {
    title: "MarketPlace",
    vouchersBox: {
      title: "Balance",
    },
    pricetitle: "Voucher price",
    datetitle: "Order date",
    SuccessfullyBtn: "Successfully used",
  },
  newsfeedScreen: {
    hii: "Hi!",
    title: "Newsfeed",
    dailyGoal: "Your steps goal for today",
  },
  MyFollowingScreen: {
    connectDeviceHeading: "Please connect your device",
    connectDeviceDescription: "If the device is not connected, we cant count steps",
    connectDeviceButtonTitle: "Connect device",
    steps: "steps",
    addPost: "Add post",
    join: "Participate",
    emptyTextMyFollowing: "Your followings haven't posted yet",
    emptyTextMyOrg: "Your organization haven't posted yet",
  },
  followAndOrganization: {
    tab1: "My followings",
    tab2: "My organization",
  },
  moreScreen: {
    title: "More",
    myProfile: {
      title: "My profile",
      title1: "Profile",
      Followers: "Followers",
      followersScreen: {
        EmptyScreentitle: "You don't have any followers yet",
      },
      
      Following: "Following",
      FollowingEmptyScreen: {
        title: "You don't have any followings yet",
      },
      myStatistics: "My statistics",
      statistics:"Statistics",
      viewAll: "View all",
      avgStep: "Avg. steps",
      avgSleep: "Avg. sleep score",
      communityBtnTitle: "My highest community level",
      badges: "Badges",
      myPlan: "My plan",
      insurancePlan:"Insurance plan",
      privateProfileText:"This user has hidden his profile",

      myOrganization: {
        title: "My organization",
        titleAnotherUser: "Organization",
        leaderboard: "Leaderboard",
        subTitleLeaderboard:'Follow the progress of members',
        subTitlechallenges:'Compete with your colleagues',
        challenges: "Challenges",
      },
      myStatisticsScreen:{
        pageTitle:"My statistics",
        tab1:"Today",
        tab2:"Last 7 days",
        tab3:"Last 30 days",
        tab4:"All time",
        stepsTitle:"Total steps",
        sroceTitle:"Avg. sleep score",
        levelTitle:"My highest community level",
        levelTitle2:"My longest streak",
      },
      BadgesScreen:{
        pageTitle:"Badges",
        Steps:"Steps",
        SleepScore:"Sleep score",
        GoodJob:"Good job",
      },
      profileSettings: {
        title: "Profile Settings",
        changeAvatar: "Change avatar",
        changeUsername: "Change username",
        changeEmail: "Change email",
        changeEmailScreen: {
          title: "Enter a new email address. We will change it after we receive your request.",
          label: "Email",
        },
        HeightWeightScreen: {
          back: "Back",
          confirm: "Confirm",
        },
        heightWeight: "Height & Weight",
        setYourHeight: "Set your height",
        profilePolicy: "Profile policy",
        ProfilePolicyScreen: {
          policy:
            "Your info (goals, steps and sleep score) is visible in the leaderboard. If you want to hide it, select the following settings.",
          title: "Make my profile private for:",
          allUser: "All users",
          Everyone: "Everyone except friends",
          organization: "Everyone except friends and my organization",
          none: "None",
        },
        deactivateAccount: {
          title: "Deactivate account",
          subTitle:
            "Are you sure you want to deactivate your account? Your profile, goals, steps and sleep score will no longer be viewable until you log back in.",
          back: "Back",
          deactivate: "Deactivate",
        },
      },
    },
    myInsurance: {
      title: "My insurance",
      tab1: "My documents",
      tab2: "Hospitals",
      documentsTitle: "Medical Ecard",
      documentsTitle2: "Tax invoice",
      documentsTitle3: "Policy contract",
      documentsTitle4: "Assist America Service description (English & Arabic)",
    },
    hospitalScreen: {
      HospitalTitle: "Medical Ecard",
      HospitalTitle2: "CNN Group",
      HospitalTitle3: "Med Hospital",
      HospitalTitle4: "Family Hospital",
    },
    hospitaldetailsScreen: {
      Address: "Address",
      phoneNumber: "Phone number",
      openingHours: "Opening hours",
      insuranceCardNumber: "Medical Park",
      callBtn: "Call",
      buildRoute:'Build a route',
      route:'Route'
    },
    myWallet: {
      title: "My wallet",
    },
    myChallenges: {
      title: "My challenges",
      active: 'Active',
      private: 'Private',
      completed: 'Completed',
      deleteChanges:'Delete the challegne',
      quitChanges:'Delete the challegne'
    },
    Devices: {
      title: "Devices",
    },
    Support: {
      title: "Support",

    },
    supportEmpty: {
      title: "Working On This Screen",
      subTitle:'Thank you'
    },
    Settings: {
      title: "Settings",
      Notifications:"Notifications",
      FAQ:"FAQ",
      TermsUse:"Terms of use",
      privacyPolicy:"Privacy policy",
      feedbackAbout :"Feedback about app",

      SettingsNotifications:{
        title: "Notifications",
        NotificationsTitle:"Notify when someone calls me to the challenge",
        NotificationsTitle2:"When someone starts following me",
        },

      SettingsFeedbackApp:{
        Send:"Send",
      title: "Feedback about app",
      FeedbackAppTitle:"Any feedback is welcome!",
      FeedbackAppSubTitle:"Share your impressions about using the app with us. Your opinion is very important to us",
      label:"Your feedback",

      },
      SettingsFAQScreen:{
        title: "FAQ",       
        },
        SettingsPrivacyScreen:{
          title: "Privacy policy",  
          PrivacyTitle:"A Terms of Use agreement is a legal agreement that lets you protect your company's legal interests, control the use of your website or app, and promote your business as a professional and trustworthy organization.",
          PrivacyTitle2:"In this article, we're going to walk you through everything you need to include in your Terms of Use agreement to make sure it's an effective, useful, and professional-looking legal agreement, and then display it to the public.",     
          },

          SettingsTermsScreen:{
            title: "Terms of use",  
            TermsTitle:"A Terms of Use agreement is a legal agreement that lets you protect your company's legal interests, control the use of your website or app, and promote your business as a professional and trustworthy organization.",
            TermsTitle2:"In this article, we're going to walk you through everything you need to include in your Terms of Use agreement to make sure it's an effective, useful, and professional-looking legal agreement, and then display it to the public.",     
            },
      
    },
  },
  followSheet: {
    Call: "Call for the challenge",
    profile: "Go to user profile",
    unFollow: "Unfollow",
    Cancel: "Cancel",
    Delete: "Delete",
    unFollowHeading: "Unfollow {{username}}",
    unFollowDesc: "Are you sure you want to unfollow {{username}}?",
  },
  goalNotSet: {
    heading: "You don’t have a goal yet",
    subHeading: "Set your goal to achieve xCoins!",
    buttonText: "Set goal",
  },
  goalScreen: {
    Steps: "Steps",
    Goalmode: "Goal mode",
    Reward: "Reward",
    Monthlygoal: "Monthly goal",
    nextMonthTittle: "Set your goal for the next month",
    nextMonthSubTittle:
      "You can set your goal for the next month. Otherwise, the goal will be automatically renewed :)",
    nextMonthButtonText: "Change goal",
    modalcloseButton: "Close",
    newGoal: "New goal",
    newGoalSteps: "Steps",
    newGoalSleep: "Sleep score",
    Goallevel: {
      selectLevel: "Choose goal mode",
      level1: "Easy",
      level2: "Medium",
      level3: "Hard",
    },
    stepsOneDay: "Steps / day",
    sleepOneDay: "Sleep score / day",
    coin: "xCoins",
    newGoalSave: "Save",
    History: "History",
    activity: {
      activityPageHeading: "My activity",
      dayTab: "Day",
      weekTab: "Week",
      monthTab: "Month",
      totalSteps: "Total steps",
      totalSleep: "Avg. sleep score",
      avgSteps: "Avg. steps",
    },
  },
  Notification: {
    headerTittle: "Notifications",
    noNotification: "Notifications are not found",
  },

  leaderboardScreen: {
    pageTitle: "Leaderboard",
    filterHeading: "Select mode",
    filtertype1: "Goals",
    filtertype2: "Steps",
    filtertype3: "Sleep score",
    filtertime1: "All time",
    filtertime2: "Last week",
    filtertime3: "Last month",
    filtertime4: "Last 6 months",
    filteHeading: "Filter & Sort",
    filterByUserLabel: "Users",
    filterByGoalMode: "Goal mode",
    filterByUserAll: "All users",
    filterByUserFoll: "My followings",
    filterByGoalModeEasy: "Easy",
    filterByGoalModeMedium: "Medium",
    filterByGoalModeHard: "Hard",
    filterCancel: "Cancel",
    filterApply: "Apply",
  },
  walletScreen: {
    pageTitle: "My wallet",
    buttonText: "Redeem my xCoins",
    transactions: "My transactions",
    voucherOpen: "Open a voucher",
    filterText: "Filter by period ",
    start: "Start",
    end: "End",
    ESMTitle: "You don’t have any transactions yet",
    ESMSubTitle: "Achieve your goal to earn xCoins!",
  },
  deviceListScreen:{
    pageTitle:'Devices'
  },
  mainBottomTabNavigator: {
    goalsTab: "Goals",
    newsfeedTab: "Home",
    challengesTab: "Challenges",
    marketplaceTab: "Marketplace",
    moreTab: "More",
  },

  CallForChallenge:{
    PageTitle:'Call for the challenge',
    badgeBtn:'Select',
    tab1:'All',
    tab2:'Private',
    tab3:'New',
    challengeBtn:'Call for the challenge',
    deleteBtn:'Delete challenge',
    appBtnTitle:'The user is not in the app',
    modalTitle:"Virtual New York City Marathon",
    modalSubTitle:"Complete the Virtual TCS New York City Marathon between October 23 and November, 2022. Complete 100km run.",
    ChallengeBasiceText:'Awaiting responses from users. If no one accepts the invitation the challenge will be deleted after 3 days',
  },
  PostScreen:{
pageTitle:"New post creation",
achievementTitle: "Share your achievements",
viewAll:"View all",
achievementAllHeading: "Your achievements for share"

  },


  "goalsScreen.title2": "Goals",
  // @demo remove-block-start
  demoNavigator: {
    componentsTab: "Components",
    debugTab: "Debug",
    communityTab: "Community",
    podcastListTab: "Podcast",
  },
  demoCommunityScreen: {
    title: "Connect with the community",
    tagLine:
      "Plug in to Infinite Red's community of React Native engineers and level up your app development with us!",
    joinUsOnSlackTitle: "Join us on Slack",
    joinUsOnSlack:
      "Wish there was a place to connect with React Native engineers around the world? Join the conversation in the Infinite Red Community Slack! Our growing community is a safe space to ask questions, learn from others, and grow your network.",
    joinSlackLink: "Join the Slack Community",
    makeIgniteEvenBetterTitle: "Make Ignite even better",
    makeIgniteEvenBetter:
      "Have an idea to make Ignite even better? We're happy to hear that! We're always looking for others who want to help us build the best React Native tooling out there. Join us over on GitHub to join us in building the future of Ignite.",
    contributeToIgniteLink: "Contribute to Ignite",
    theLatestInReactNativeTitle: "The latest in React Native",
    theLatestInReactNative: "We're here to keep you current on all React Native has to offer.",
    reactNativeRadioLink: "React Native Radio",
    reactNativeNewsletterLink: "React Native Newsletter",
    reactNativeLiveLink: "React Native Live",
    chainReactConferenceLink: "Chain React Conference",
    hireUsTitle: "Hire Infinite Red for your next project",
    hireUs:
      "Whether it's running a full project or getting teams up to speed with our hands-on training, Infinite Red can help with just about any React Native project.",
    hireUsLink: "Send us a message",
  },
  demoShowroomScreen: {
    jumpStart: "Components to jump start your project!",
    lorem2Sentences:
      "Nulla cupidatat deserunt amet quis aliquip nostrud do adipisicing. Adipisicing excepteur elit laborum Lorem adipisicing do duis.",
    demoHeaderTxExample: "Yay",
    demoViaTxProp: "Via `tx` Prop",
    demoViaSpecifiedTxProp: "Via `{{prop}}Tx` Prop",
  },
  demoDebugScreen: {
    howTo: "HOW TO",
    title: "Debug",
    tagLine:
      "Congratulations, you've got a very advanced React Native app template here.  Take advantage of this boilerplate!",
    reactotron: "Send to Reactotron",
    reportBugs: "Report Bugs",
    demoList: "Demo List",
    demoPodcastList: "Demo Podcast List",
    androidReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running, run adb reverse tcp:9090 tcp:9090 from your terminal, and reload the app.",
    iosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    macosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    webReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    windowsReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
  },
  demoPodcastListScreen: {
    title: "React Native Radio episodes",
    onlyFavorites: "Only Show Favorites",
    favoriteButton: "Favorite",
    unfavoriteButton: "Unfavorite",
    accessibility: {
      cardHint:
        "Double tap to listen to the episode. Double tap and hold to {{action}} this episode.",
      switch: "Switch on to only show favorites",
      favoriteAction: "Toggle Favorite",
      favoriteIcon: "Episode not favorited",
      unfavoriteIcon: "Episode favorited",
      publishLabel: "Published {{date}}",
      durationLabel: "Duration: {{hours}} hours {{minutes}} minutes {{seconds}} seconds",
    },
    noFavoritesEmptyState: {
      heading: "This looks a bit empty",
      content:
        "No favorites have been added yet. Tap the heart on an episode to add it to your favorites!",
    },
  },

  marketplaceModal: {
    LabelText: "xCoins",
    LabelTextRight: "Apple pay",
    titleMiddle: "Balance",
    titleMiddleRight: "Balance",
    titleBottom: "Needed (xCoins)",
    titleBottomRight: "Needed (AED)",
  },
  MyvouchersScreen: {
    pageTitle: "My vouchers",
    tab1: "Active",
    tab2: "Used",
  },
  // @demo remove-block-end
}

export default en
export type Translations = typeof en
