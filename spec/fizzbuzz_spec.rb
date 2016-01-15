require 'fizzbuzz'

describe 'fizzbuzz' do
  it "should be 'fizz' when passed 3" do
    expect(fizzbuzz(3)).to eq 'fizz'
  end
  it "should return 'buzz' when passed 5" do
    expect(fizzbuzz(5)).to eq 'buzz'
  end
  it "should return 'fizzbuzz' when passe 15" do
    expect(fizzbuzz(15)).to eq 'fizzbuzz'
  end
end
