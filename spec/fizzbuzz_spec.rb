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
  it "should return number when pass any other number" do
    expect(fizzbuzz(4)).to eq 4
  end
end
