---
title: Home
layout: PageLayout
sections:
  - type: HeroSection
    elementId: ''
    colors: colors-h
    title: We write things. Sometimes it’s important, most times it’s not.
    actions:
      - type: Button
        url: '#'
        label: Download
        style: primary
    feature:
      type: ImageBlock
      url: /images/fish-dinner.png
      altText: Image alt text
      caption: Image caption
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-neutral
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
        margin:
          - mt-0
          - mb-4
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
        margin:
          - mt-0
          - mb-6
      text:
        textAlign: left
        margin:
          - mt-0
          - mb-8
      actions:
        justifyContent: flex-start
  - type: FeaturedPostsSection
    elementId: ''
    variant: variant-b
    colors: colors-a
    title: Recent posts
    actions:
      - type: Button
        label: Read all posts
        url: /
        style: primary
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
    styles:
      self:
        height: screen
        width: wide
        margin: ["mt-0", "mb-0", "ml-0", "mr-0"]
        padding: ["pt-12", "pb-12", "pr-4", "pl-4"]
        justifyContent: center
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: center
        margin: ["mb-20"]
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: center
        margin: ["mt-0", "mb-12"]
      actions:
        justifyContent: center
  - type: HeroSection
    elementId: ''
    colors: colors-h
    feature:
      type: ImageBlock
      url: /images/fish-dinner.png
      altText: Image alt text
      caption: Image caption
    styles:
      actions:
        justifyContent: flex-start
        width: full
  - type: ContactSection
    elementId: contact-form
    colors: colors-f
    title: Get early access
    text: Sign up your team today to be the first to try out our new product to increase your team’s productivity
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: email
          placeholder: Email
          isRequired: true
          width: 1/2
      submitLabel: Send Message
    styles:
      self:
        height: auto
        width: wide
        margin: ["mt-0", "mb-0", "ml-0", "mr-0"]
        padding: ["pt-12", "pb-24", "pr-4", "pl-4"]
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: center
        margin: ["mt-0", "mb-4"]
      text:
        textAlign: center
        margin: ["mt-0", "mb-12"]
---
