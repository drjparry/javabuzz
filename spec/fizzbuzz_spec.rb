require 'fizzbuzz'

describe 'fizzbuzz' do
  it "should be 'fizz' when passed 3" do
    expect(3.fizzbuzz).to eq 'fizz'
  end
  it "should return 'buzz' when passed 5" do
    expect(5.fizzbuzz).to eq 'buzz'
  end
  it "should return 'fizzbuzz' when passe 15" do
    expect(15.fizzbuzz).to eq 'fizzbuzz'
  end
  it "should return number when pass any other number" do
    expect(4.fizzbuzz).to eq 4
  end
end
