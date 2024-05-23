module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  globals: {
    'vue-jest': {
      compilerOptions: {
        isCustomElement: (tag) => {
          console.log('tag', tag)

          return tag.startsWith('NAvatar')
        },
      },
    },
  },
}
