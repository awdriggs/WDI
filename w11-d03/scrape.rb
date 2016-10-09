require 'watir-webdriver'
require 'pry'
require 'open-uri'
require 'nokogiri'

# b = Watir::Browser.new :firefox
b = Watir::Browser.new :firefox
# b.window.resize_to(1680, 1050) # set browser window to a large desktop to avoid issues with media queries altering the DOM
b.window.resize_to(1436, 900)
# b.goto 'pepidconnect.com'

b.goto 'instagram.com'
# b.text_field(:id => 'ToolsContentPlaceHolder_txtUsername').set 'pavan.katepalli@inrtracker.com'
# b.text_field(:id => 'ToolsContentPlaceHolder_txtPassword').set 'dfdfdfs'
# b.button(:id => 'ToolsContentPlaceHolder_bLogin').click

# b.driver.manage.timeouts.implicit_wait = 8

# Watir::Wait.until { b.link(:text => 'Drug Interactions', :class => 'level1').exists? }

# b.link(:text => 'Drug Interactions', :class => 'level1').click

# b.driver.manage.timeouts.implicit_wait = 5

# b.text_field(:id => 'ToolsContentPlaceHolder_DIG1_TextBoxDIGSearch').set 'warfarin'

# Watir::Wait.until { b.div(:class => 'listItem').exists? }

# b.send_keys :enter

# Watir::Wait.until { b.div(:class => 'dig-selected-drug').exists? }

# b.text_field(:id => 'ToolsContentPlaceHolder_DIG1_TextBoxDIGSearch').set 'advil'

# Watir::Wait.until { b.div(:class => 'listItem').exists? }

# b.send_keys :enter

# #Watir::Wait.until {  b.div(:id => 'ToolsContentPlaceHolder_DIG1', :class => 'accordionHeaderSelected').exists? }

# unless b.text.include? "No Interactions Found"

#     # I can do this
    
#     page_html = Nokogiri::HTML.parse(b.html) 
    
#     puts page_html.xpath('//*[@id="ToolsContentPlaceHolder_DIG1_LabelIxDetails_0"]').inner_text

# end