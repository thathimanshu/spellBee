import Letter from './Letter.jsx'
function Letters(){
    return (
        <div className='flex flex-col h-[350px] w-[350px] justify-center items-center'>
            <div className='flex justify-center'>
                <Letter bgColor={'#dfe6ed'} text='H'/>
                <Letter bgColor={'#dfe6ed'} text='H'/>
            </div>
            <div className='flex justify-center'>
                <Letter bgColor={'#dfe6ed'} text='H'/>
                <Letter bgColor={'#ffd924'} text='H' className='main'/>
                <Letter bgColor={'#dfe6ed'} text='H'/>
            </div>
            <div className='flex justify-center'>
                <Letter bgColor={'#dfe6ed'} text='H'/>
                <Letter bgColor={'#dfe6ed'} text='H'/>
            </div>
        </div>
    )
}
export default Letters