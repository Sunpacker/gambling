describe.each([
  { input: 0, output: '0.00' },
  { input: 0.0, output: '0.00' },
  { input: 14.235, output: '14.23' },
])('formatBalance positive test', ({ input, output }) => {
  it(`test formatting ${input} into ${output}`, () => {
    expect(formatBalance(input)).toEqual(output)
  })
})
